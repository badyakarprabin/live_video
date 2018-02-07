import React, { Component } from 'react';

import * as routes from '../../common/routes';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand logo-icon">
                                <img src='http://glptn.org/wp-content/uploads/2015/12/Icon-elearning.png' alt='Logo' width='30px' height='30px' />
                                {/* <span className='logo-text'><b><i> E-Learning</i></b></span> */}
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href='/'>Home</a></li>
                                <li><a href={routes.VIDEO}>Projects</a></li>
                                <li><a href={routes.CONTACT}>Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href={routes.LOGIN}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
