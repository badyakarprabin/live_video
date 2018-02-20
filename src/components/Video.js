import $ from "jquery";
import OT from '@opentok/client';
import React, { Component } from 'react';
import * as classNames from 'classnames';

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
const initializeSession = (fullMode) => {

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
        fitMode: "cover",
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
            fullMode: false,
            showWhiteBoard: false,
            showMessage: true,
            subscriberList: [],
            messageContainer: []
        };
    }

    togglePrivateMessage() {

    }

    toggleScreen() {
        this.setState({
            fullMode: !this.state.fullMode
        })
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
        initializeSession(this.state.fullMode);
        // Subscribe to a newly created stream
        session.on("streamCreated", (event) => {
            let subscriberContainer = [];

            subscriberContainer.push(event.stream.connection);
            this.setState({
                subscriberList: subscriberContainer
            })
            session.subscribe(event.stream, 'subscriber', {
                insertMode: 'append',
                id: 'testst',
                width: '100%',
                height: '100%'
            }, handleError);

            // $('#subscriber').children().attr('data-toggle', "tooltip");
            // $('#subscriber').children().attr('title', "Click to send private message");
            // $('#subscriber').children().attr('data-placement', "bottom");
            // $('#subscriber').children().last().prepend("<div class='btn' onClick={this.toggleMessage}>Message</div>")
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
        let fullModeClass = classNames({
            'clearfix': true,
            'text-center': true,
            'col-xs-12 col-lg-5': !this.state.fullMode,
            'col-xs-12 col-lg-10-offset-1': this.state.fullMode
        });

        let fullModeContainer = classNames({
            'publiser-video': true,
            'publiser-video-lg': this.state.fullMode,
            'publiser-video-xs': !this.state.fullMode
        })


        const { subscriberList, showMessage, messageContainer, showWhiteBoard, fullMode } = this.state;

        return (
            <div className="container component-screen video-container">
                <div className={fullModeClass}>
                    <div className={fullModeContainer}>
                        <div id='publisher' style={{ width: '100%', height: '100%' }} />
                    </div>
                    {!fullMode && <img className='publisher-settings' src={videoSettings} alt='setting' style={{ 'width': '90%' }} />}
                    <div className='btn btn-primary' onClick={() => this.toggleScreen()} style={{ 'position': 'relative', 'top': '-45px' }}>Toggle Size</div>
                </div>
                {!fullMode && subscriberList.length !== 0 &&
                    <div className="col-xs-12 col-lg-2">
                        <div className='row'>
                            <div className='col-xs-12'>
                                <div className='subscriber-container'>
                                    <div id='subscriber' style={{ width: '100%', height: '100%' }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {!fullMode && showMessage &&
                    <div className="col-xs-12 col-lg-4 message-box">
                        <button className='btn btn-warning' onClick={() => this.toggleBoard()}>Jump : <b>{!showWhiteBoard ? 'Whiteboard' : 'Message'}</b></button>
                        {showWhiteBoard &&
                            <div className="card text-center">
                                <div className="col-xs-12 message-card-body">
                                    {this.state.messageContainer.map((item, index) =>
                                        <div className='message-font' key={index} >
                                            <span className='message-sender'> <b>Sender :</b></span>
                                            <span className='message-text' key={index}>
                                                {item}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="col-xs-12 card-footer text-muted">
                                    <input type="text" className="col-xs-8 text-box" maxLength="160" id='message' placeholder="Type a message.." />
                                    <button className="col-xs-4 btn btn-outline-secondary box-shadow glyphicon glyphicon-share-alt" type="button" onClick={() => publicMessage()} />
                                    <button className='btn btn-primary pull-right box-shadow'
                                        onClick={() => this.toggleMessage()}>
                                        <span>Hide</span>
                                    </button>

                                </div>
                            </div>
                        }
                    </div >
                }
                {!fullMode && !showMessage &&
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
