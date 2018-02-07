import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form>
                <div className="container" style={{ width: '40%' }}>
                    <div className='col-xs-12'>
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        {/* <div style={{ padding: '20px', 'background-color': '#f1f1f1' }}>
                            <button type="button" className="cancelbtn">Cancel</button>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div> */}
                    </div>
                </div>
            </form>
        )
    }
}

export default Login;