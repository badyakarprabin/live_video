import $ from "jquery";
import OT from '@opentok/client';
import React, { Component } from 'react';
import avatar from '../assets/avatar.png'
import 'opentok-solutions-css';
import AccCore from 'opentok-accelerator-core';

const API_KEY = '46044372';
const SESSION_ID = '2_MX40NjA0NDM3Mn5-MTUxODgwNDk4MTg4Nn5Ea0pjN0F2S0ZZVUpaUUFrRjZBclRVU3N-fg';
const TOKEN = 'T1==cGFydG5lcl9pZD00NjA0NDM3MiZzaWc9NWE3MGNkYzYxYWMyMDdiZjdiYTllYmMyMjY5NWNhN2MzMmJkZmZjNTpzZXNzaW9uX2lkPTJfTVg0ME5qQTBORE0zTW41LU1UVXhPRGd3TkRrNE1UZzRObjVFYTBwak4wRjJTMFpaVlVwYVVVRnJSalpCY2xSVlUzTi1mZyZjcmVhdGVfdGltZT0xNTE4ODA1MDAxJm5vbmNlPTAuNjI0MTE4MjM2MDQzNTU1OCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTIxMzk3MDAwJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

function handleError(error) {
    if (error) {
        alert(error.message);
    }
}
let session = OT.initSession(API_KEY, SESSION_ID);

let messageContainer = [];

const oneToOneMessage = (e) => {
    session.signal(
        {
            connection: {
                connectionId: 'id'
            },
            type: "textMessage",
            data: $('#message').val()
        },
        function (error) {
            if (error) {
                console.log("signal error ("
                    + error.name
                    + "): " + error.message);
            } else {
                console.log("signal sent.");
            }
        }
    );
}

const publicMessage = () => {
    session.signal(
        {
            type: "textMessage",
            data: $('#message').val()
        },
        function (error) {
            if (error) {
                console.log("signal error ("
                    + error.name
                    + "): " + error.message);
            } else {
                console.log("signal sent.");
            }
        }
    );
}
const initializeSession = () => {

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
    }, handleError());

    session.connect(TOKEN, function (error) {
        // If the connection is successful, initialize a publisher and publish to the session
        if (error) {
            this.handleError(error);
        } else {
            session.publish(publisher, handleError);

        }
    });
}

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriberList: [],
            messageContainer: []
        };
    }

    componentDidMount() {
        initializeSession();
        // Subscribe to a newly created stream
        session.on("streamCreated", (event) => {
            let subscriberContainer = [];

            subscriberContainer.push(event.stream.connection);

            session.subscribe(event.stream, 'subscriber', {
                insertMode: 'append',
                width: '100%',
                height: '100%'
            }, handleError);
            this.setState({
                subscriberList: subscriberContainer
            })
            console.log('test', this.state.subscriberList)
        });

        let message = [];

        session.on("signal:textMessage", (event) => {
            message.push("User :" + event.data)
            this.setState({
                messageContainer: message
            })
            // Process the event.data property, if there is any data.
        });

        $('#subscriber .OT_root').on('click', function (e) {
            var publiserTag = $('#publisher').children()[0];
            var subscriberTag = $(e.currentTarget)[0];
            $(e.currentTarget).replaceWith(publiserTag);
            $('#publisher').html(subscriberTag);
        })
    }

    render() {
        const { subscriberList } = this.state;

        return (
            <div className="container component-screen">
                <div className="col-xs-12 col-lg-7">
                    <div className='publisher-video' >
                        <div id='publisher' style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div className="col-xs-12 col-lg-5">
                    <div className='row'>
                        <div className='col-xs-5'>
                            <div className='subscriber-container'>
                                <div id='subscriber' style={{ width: '100%', height: '100%' }}>
                                    {subscriberList.map((item, index) => (
                                        <div className='col-xs-2 glyphicon glyphicon-envelope'
                                            onClick={(e) => oneToOneMessage(e)}
                                            style={{ margin: '40px 0px' }} />
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-xs-12 col-lg-3 message-box">
                    <div class="card text-center">
                        <div class="card-header">
                            Public : Chat Room   [] X
                        <div class="message-card-body">
                                <p class="card-text">Get in touch with your mentor in the public chat room</p>
                                {this.state.messageContainer.map((item, index) =>
                                    <div key={index}>{item}</div>
                                )}
                            </div>
                            <div class="card-footer text-muted">
                                <input type="text" class="form-control" id='message' placeholder="Recipient's username" />
                                <button class="btn btn-outline-secondary glyphicon glyphicon-share-alt" type="button" onClick={() => publicMessage()} />
                            </div>
                        </div>

                    </div>
                </div > */}
            </div>
        );
    }
}

export default Video;
