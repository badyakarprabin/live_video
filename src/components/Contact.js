import * as React from 'react';

const Contact = () => {
    return (
        <div className='container component-screen'>
            <div>
                <div className='col-xs-12 contact'><h2 className='nav-header-text'>Contact Us</h2></div>
            </div>
            <div>
                <div className='col-xs-12 col-md-6 text-padding'>
                    <p>
                        Live Vide streaming is made for all customers who are willing to learn but has less time to go to the school/college for studies. If you want to be part of us please contact us in the following address.
                    </p>
                    <br />
                    <div className='col-xs-6 no-padding'>
                        <h4 className='nav-header-text'>Location</h4>
                        <div>John Smit</div>
                        <div>100 Main St</div>
                        <div>Po Box 1022</div>
                        <div>Seattle WA 98104</div>
                        <div>USA</div>
                    </div>
                    <div className='col-xs-6'>
                        <div className='pull-right text-align-right'>
                            <h4 className='nav-header-text'>Contact No. </h4>
                            <div>+1-541-754-3010</div>
                            <div>+1-541-754-3111</div>
                        </div>
                    </div>

                </div>
                <div className='col-xs-12 col-md-6 text-padding'>
                    <img src='https://www.ydesignservices.com/wp-content/uploads/2016/07/Googlemap-600x551.jpg' alt='Location' width='100%' />
                </div>
            </div>
        </div >
    );
}

export default Contact;