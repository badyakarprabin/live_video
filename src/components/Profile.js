import * as React from 'react';
import { Link } from 'react-router-dom';

import teacher from '../assets/teacher.png';

const Contact = () => {
    return (
        <div className='container component-screen loading-animation'>
            <div className='profile-container text-center'>
                <div className='col-xs-12 nav-header-text'>
                    <h2>Profile Summary</h2>
                </div>
                <div className='col-xs-12 profile-img'>
                    <img src={teacher} className='profile-img' alt='teacher' width={200} height={200} />
                </div>
                <div className='col-xs-12 profile-details nav-header-text'>
                    <h4> Tom Handson </h4>
                    <div> Chemistry </div>
                    <div> tom.handson183@gmail.com </div>
                    <div> Status : <span className='glyphicon glyphicon-ok'>Active</span> </div>
                </div>
                <Link to='/courses'><div className='btn btn-primary'>Back</div></Link>
            </div>
        </div >
    );
}

export default Contact;