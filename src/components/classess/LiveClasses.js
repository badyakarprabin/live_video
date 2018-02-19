import * as React from 'react';

import Live from './Live';
// import Upcoming from './Upcoming';

const LiveClass = () => {
    return (
        <div className='container component-screen loading-animation'>
            <div className='contact'>
                <div className='nav-header-text text-center'>
                    <h2>Live Class</h2>
                </div>
                <div className='col-xs-12'>
                    <Live />
                    <Live />
                    <Live />
                    <Live />
                    <Live />
                    <Live />
                </div>
            </div>
            {/* <div className='live-container'>
                <div className='nav-header-text text-center'>
                    <h2>Upcoming Class</h2>
                </div>
                <div className='col-xs-12'>
                    <Upcoming />
                </div>
            </div> */}
        </div >
    );
}

export default LiveClass;