import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form className='loading-animation'>
                <div className="container login-box component-screen">
                    <div className='col-xs-12'>
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button className='login-button' type="submit">Login</button>
                    </div>
                    {/* <div style={{ padding: '20px', 'background-color': '#f1f1f1' }}>
                            <button type="button" className="cancelbtn">Cancel</button>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div> */}
                </div>
            </form>
        )
    }
}

export default Login;