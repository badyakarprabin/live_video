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

$('#subscriber').on('click', function () {
    var publiserTag = $('#publisher').children().html();
    var subscriberTag = $('.OT_subscriber').html();
    $('#publisher').children().html(subscriberTag);
    $('#subscriber').prepend(subscriberTag);
})



class Video extends Component {

    initializeSession() {

        $('#subscriber .OT_root').on('click', function (e) {
            var publiserTag = $('#publisher').children()[0];
            var subscriberTag = $(e.currentTarget)[0];
            $(e.currentTarget).replaceWith(publiserTag);
            $('#publisher').html(subscriberTag);
        })

        var session = OT.initSession(API_KEY, SESSION_ID);

        // Subscribe to a newly created stream
        session.on('streamCreated', function (event) {
            session.subscribe(event.stream, 'subscriber', {
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
    componentWillMount() {

    }
    componentDidMount() {
        this.initializeSession();
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
                        {/* <div id="cameraPublisherContainer" style={{ width: '100%', height: '100%' }} /> */}
                    </div>
                </div>
                <div className="col-xs-12 col-lg-5">
                    <div className='row'>
                        <div className='col-xs-5'>
                            <div className='subscriber-video'>
                                <div id='subscriber' style={{ width: '100%', height: '100%' }} />
                                <div id="cameraSubscriberContainer" />
                            </div>
                        </div>
                    </div>
                    {/* <div className='row'>
                        <div className='col-xs-5'>
                            <div className='subscriber-video'>
                                <img src={avatar} width='100px' height='100px' alt='Subscriber' />
                            </div>
                        </div>
                        <div className='col-xs-7' style={{ margin: '10px 0px' }}>
                            <div> Ram Shreatha </div>
                            <div> Status : Online </div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="col-xs-12 col-lg-3 message-box">
                </div> */}
            </div>
        );
    }
}

export default Video;
