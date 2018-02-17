import * as React from 'react';

import views from '../../assets/views.png';
import onair from '../../assets/onair.png';
import biology from '../../assets/biology.png';
import chemistry from '../../assets/chemistry.jpg';

const Live = () => {
    return (
        <div>
            <div className='col-xs-2'>
                <div className='live-container'>
                    <div className='class-container'>
                        <img src={onair} width={20} height={20} alt='live' style={{ 'margin': '3px', 'position': 'absolute' }} />
                        <img src={biology} alt='biology' width={155} height={100} />
                    </div>
                    <div class='text-center'>
                        <div>Biology</div>
                        <div>
                            <span><a href='/profile'>Lomos :</a></span>
                            <span> 51 <img src={views} width={20} height={20} alt='views' /></span><br />
                        </div>
                        <div><span className='duration'> 1 hours ago </span></div>
                    </div>
                </div>
            </div>
            <div className='col-xs-2'>
                <div className='live-container'>
                    <div className='class-container'>
                        <img src={onair} width={20} height={20} alt='live' style={{ 'margin': '3px', 'position': 'absolute' }} />
                        <img src={chemistry} alt='chemistry' width={155} height={100} />
                    </div>
                    <div class='text-center'>
                        <div>Biology</div>
                        <div>
                            <span><a href='/profile'>Tom Hendson :</a></span>
                            <span> 31 <img src={views} width={20} height={20} alt='views' /></span><br />
                            <div><span className='duration'> 50 mins ago </span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Live;