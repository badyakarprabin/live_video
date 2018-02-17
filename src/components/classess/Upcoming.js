import * as React from 'react';

import biology from '../../assets/biology.png';
import chemistry from '../../assets/chemistry.jpg';

const Upcoming = () => {
    return (
        <div>
            <div className='col-xs-2'>
                <div className='live-container'>
                    <div className='class-container'>
                        <img src={chemistry} alt='chemistry' width={170} height={100} />
                    </div>
                    <div class='text-center'>
                        <div>Chemistry</div>
                        <div>
                            <span><a href='/profile'>Lomos</a></span>
                            <div><span className='duration'> ~ 1 hours </span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xs-2'>
                <div className='live-container'>
                    <div className='class-container'>
                        <img src={biology} alt='chemistry' width={170} height={100} />
                    </div>
                    <div class='text-center'>
                        <div>Biology</div>
                        <div>
                            <span><a href='/profile'>Lomos</a></span>
                            <div><span className='duration'> ~ 30 hours </span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upcoming;