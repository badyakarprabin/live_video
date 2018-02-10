import React, { Component } from 'react';

import avatar from '../assets/avatar.png'

class Video extends Component {
    render() {
        return (
            <div className="container component-screen">
                <div className="col-xs-12 col-lg-7">
                    <div className='publisher-video'>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-5">
                    <div className='row'>
                        <div className='col-xs-5'>
                            <div className='subscriber-video'>
                                <img src={avatar} width='100px' height='100px' alt='Subscriber' />
                            </div>
                        </div>
                        <div className='col-xs-7' style={{ margin: '10px 0px' }}>
                            <div> Ram Shreatha </div>
                            <div> Status : Online </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-5'>
                            <div className='subscriber-video'>
                                <img src={avatar} width='100px' height='100px' alt='Subscriber' />
                            </div>
                        </div>
                        <div className='col-xs-7' style={{ margin: '10px 0px' }}>
                            <div> Ram Shreatha </div>
                            <div> Status : Online </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-xs-12 col-lg-3 message-box">
                </div> */}
            </div>
        );
    }
}

export default Video;
