import * as React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-xs-12 contact'><h2 className='nav-header-text'>Contact Us</h2></div>
            </div>
            <div className='row'>
                <div className='col-xs-12 col-md-6 text-padding'>
                    <p>
                        Live Vide streaming is made for all customers who are willing to learn but has less time to go to the school/college for studies. If you want to be part of us please contact us in the following address.
                    </p>
                    <br />
                    <div className='col-xs-6'>
                        <h3 className='nav-header-text'>Location</h3>
                        <div>JOHN SMITH</div>
                        <div>100 MAIN ST</div>
                        <div>PO BOX 1022</div>
                        <div>SEATTLE WA 98104</div>
                        <div>USA</div>
                    </div>
                    <br />
                    <div className='col-xs-6'>
                        <h3 className='nav-header-text'>Contact No. </h3>
                        <div>+1-541-754-3010</div>
                        <div>+1-541-754-3111</div>
                    </div>

                </div>
                <div className='col-xs-12 col-md-6 text-align-center'>
                    <img src='https://www.ydesignservices.com/wp-content/uploads/2016/07/Googlemap-600x551.jpg' alt='Location' width='70%' />
                </div>
            </div>
        </div >
    );
}

export default Contact;