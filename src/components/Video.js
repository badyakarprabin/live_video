import $ from "jquery";
import OT from '@opentok/client';
import React, { Component } from 'react';
import avatar from '../assets/avatar.png'
import 'opentok-solutions-css';
import AccCore from 'opentok-accelerator-core';

const API_KEY = '46044372';
const SESSION_ID = '2_MX40NjA0NDM3Mn5-MTUxNzAzNTM5MzAzOX5FWkxWNUNGSFNtVFNoZE5PVGdxaHh3ZU5-fg';
const TOKEN = 'T1==cGFydG5lcl9pZD00NjA0NDM3MiZzaWc9OTUzNGY0NTNhZDI4MTBkNjMyODc0NDMwOTBiZTNkMjhmYTRmZjBjZTpzZXNzaW9uX2lkPTJfTVg0ME5qQTBORE0zTW41LU1UVXhOekF6TlRNNU16QXpPWDVGV2t4V05VTkdTRk50VkZOb1pFNVBWR2R4YUhoM1pVNS1mZyZjcmVhdGVfdGltZT0xNTE3MDM1NDQ1Jm5vbmNlPTAuMDMxMjY4OTYwOTY2MTM5MTgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUxOTYyNzQ0NCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

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


    // Subscribe to a newly created stream
    session.on('streamCreated', function (event) {
        session.subscribe(event.stream, 'subscriber', {
            connection: event.stream.connection,
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, handleError);
    });

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
            messageContainer: []
        };
    }

    componentDidMount() {
        initializeSession();

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
                            <div className='subscriber-video'>
                                <div className='col-xs-10' id='subscriber' style={{ width: '70%', height: '100%' }} />
                                <div className='col-xs-2 glyphicon glyphicon-envelope'
                                    onClick={(e) => oneToOneMessage(e)}
                                    style={{ margin: '40px 0px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-3 message-box">
                    <div class="card text-center">
                        <div class="card-header">
                            Public : Chat Room   [] X
  </div>
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
            </div >
        );
    }
}

export default Video;
