import * as classNames from 'classnames';
import React, { Component } from 'react';

import icon from '../../assets/icon.png';
import * as routes from '../../common/routes';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveTab: 0
        };
    }

    componentWillMount() {
        const location = window.location.pathname;
        switch (location) {
            case '/video':
                this.setState({
                    isActiveTab: 1
                });
                break;
            case '/contact':
                this.setState({
                    isActiveTab: 2
                });
                break;
            case '/login':
                this.setState({
                    isActiveTab: 3
                });
                break;
            default:
                this.setState({
                    isActiveTab: 0
                });
                break;

        }
    }

    onNavClick(param) {
        const activeData = this.state.isActiveTab.map((item, index) => {
            return param === index
        })
        this.setState({ isActiveTab: activeData });
    }

    render() {
        const isHomeActive = classNames({
            'active': this.state.isActiveTab === 0
        })
        const isProjectActive = classNames({
            'active': this.state.isActiveTab === 1
        })
        const isContactActive = classNames({
            'active': this.state.isActiveTab === 2
        })
        const isLoginActive = classNames({
            'active': this.state.isActiveTab === 3,
        })

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
                                <img src={icon} alt='Logo' width='30px' height='30px' />
                                {/* <span className='logo-text'><b><i> E-Learning</i></b></span> */}
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className={isHomeActive} onClick={() => this.onNavClick(0)}><a href='/'>Home</a></li>
                                <li className={isProjectActive} onClick={() => this.onNavClick(1)}><a href={routes.VIDEO}>Live Sessions</a></li>
                                <li className={isContactActive} onClick={() => this.onNavClick(2)}><a href={routes.CONTACT}>Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className={isLoginActive}><a onClick={() => this.onNavClick(3)} href={routes.LOGIN}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
