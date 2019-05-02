import React from 'react';
import "./Login.css";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userField : ""
        }
    }

    login = () => {
        if (!localStorage.getItem('user')) {
            localStorage.setItem("user", this.state.userField) 
            this.props.loginStatus(true)
        }
        this.setState({
            userField : ""
        })
    }

    onChange = event => {
        this.setState({
            userField : event.target.value
        })
    }

    render() {
        return (
            <div className="login-page">

                <div className="login-wrapper">
                    <div className="login-logo"></div>
                    <div className="login-icon"></div>
                    <input 
                        type="text" 
                        placeholder="username" 
                        onChange={this.onChange}
                        value = {this.state.userField} />
                    <input type="password" placeholder="password" />
                    <button onClick={this.login}>Log in</button>
                </div>
            </div>
        )
    }
}

export default Login;