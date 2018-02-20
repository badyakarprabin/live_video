import * as React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../common/routes'
// import views from '../../assets/views.png';
// import onair from '../../assets/onair.png';
import biology from '../../assets/biology.png';
// import chemistry from '../../assets/chemistry.jpg';

const Live = () => {
    return (
        <div className='col-lg-2 col-xs-6'>
            <div className='live-container'>
                <Link to={routes.VIDEO}>
                    <div className='class-container'>
                        <div className='course-live' />
                        <img src={biology} className='course-thumbnail' alt='biology' />
                    </div>
                </Link>
                <div className='course-thumbnail-text text-center'>
                    <div>Biology</div>
                    <div>
                        <span><a href={routes.PROFILE}>Lomos Thomson</a></span>
                        <span> Views : 51 </span>
                    </div>
                    <div style={{ 'marginTop': '5px' }}><span className='duration'> 1 hours ago </span></div>
                </div>
            </div>
        </div>
    );
}

export default Live;