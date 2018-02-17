import $ from "jquery";
import OT from '@opentok/client';
import React, { Component } from 'react';

import videoSettings from '../assets/video.png'

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
                $('#message').val('')
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
            showWhiteBoard: false,
            showMessage: true,
            subscriberList: [],
            messageContainer: []
        };
    }

    togglePrivateMessage() {

    }

    toggleMessage() {
        this.setState({
            showMessage: !this.state.showMessage
        })
    }

    toggleBoard() {
        this.setState({
            showWhiteBoard: !this.state.showWhiteBoard
        })
    }
    componentDidMount() {
        initializeSession();
        // Subscribe to a newly created stream
        session.on("streamCreated", (event) => {
            let subscriberContainer = [];

            subscriberContainer.push(event.stream.connection);
            this.setState({
                subscriberList: subscriberContainer
            })
            let connectionId = event.stream.connection.connectionId;

            session.subscribe(event.stream, 'subscriber', {
                insertMode: 'append',
                id: 'testst',
                width: '100%',
                height: '100%'
            }, handleError);
            $('#subscriber').children().attr('data-toggle', "tooltip");
            $('#subscriber').children().attr('title', "Click to send private message");
            $('#subscriber').children().attr('data-placement', "bottom");
            $('#subscriber').children().last().prepend("<div class='btn' onClick={this.toggleMessage}>Message</div>")
        });

        let message = [];

        session.on("signal:textMessage", (event) => {
            message.push(event.data)
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
        const { subscriberList, showMessage, messageContainer, showWhiteBoard } = this.state;

        return (
            <div className="container component-screen video-container">
                <div className="col-xs-12 col-lg-5 text-center">
                    <div className='publisher-video' >
                        <div id='publisher' style={{ width: '100%', height: '100%' }} />
                    </div>
                    <img src={videoSettings} alt='setting' style={{ 'width': '90%' }} />
                </div>
                {subscriberList.length !== 0 &&
                    <div className="col-xs-12 col-lg-3">
                        <div className='row'>
                            <div className='col-xs-5'>
                                <div className='subscriber-container'>
                                    <div id='subscriber' style={{ width: '100%', height: '100%' }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {showMessage &&
                    <div className="col-xs-12 col-lg-3 message-box">
                        <button className='btn btn-warning' onClick={() => this.toggleBoard()}>Jump : <b>{!showWhiteBoard ? 'Whiteboard' : 'Message'}</b></button>
                        {showWhiteBoard &&
                            <div className="card text-center">
                                <div className="col-xs-12 message-card-body">
                                    {this.state.messageContainer.map((item, index) =>
                                        <div>
                                            <span className='message-sender'> Sender </span>
                                            <div className='message-text' key={index}>
                                                {item}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-xs-12 card-footer text-muted">
                                    <input type="text" class="col-xs-8 text-box" maxlength="160" id='message' placeholder="Type a message.." />
                                    <button class="col-xs-4 btn btn-outline-secondary box-shadow glyphicon glyphicon-share-alt" type="button" onClick={() => publicMessage()} />
                                    <button class='btn btn-primary pull-right box-shadow'
                                        onClick={() => this.toggleMessage()}>
                                        <span>Hide</span>
                                    </button>

                                </div>
                            </div>
                        }
                    </div >
                }
                {!showMessage &&
                    <div>
                        <button class='btn btn-primary pull-right box-shadow'
                            onClick={() => this.toggleMessage()}>
                            <span>Menu </span>
                            {messageContainer.length !== 0 && <span class="badge">{messageContainer.length}</span>}
                        </button>
                    </div>
                }
            </div>
        );
    }
}

export default Video;
