import React from 'react';
import "./Login.css";
import bgImg from "./../../img/insta_bg.jpg";

import styled from "styled-components";

const LoginPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    flex-wrap: wrap;
    background: url(${bgImg});
    background-size:cover;
    background-position:center center;
    font-family: Roboto, sans-serif;

    @media (max-width:1100px) {
        justify-content:center;
    }
    `;

const LoginWrapper = styled.div`
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin-right: 10rem;
    background-color: #ffffff50;
    padding: 15px;
    box-shadow: 0px 0px 18px #00000050;

    @media (max-width:1100px) {
        margin-right:0;
    }

    @media(max-width:500px) {
        max-width:90%;
    }
    `;

const LoginLogo = styled.div`
    background-image: url(/static/media/insta-sprite.d0e3cb0e.png);
    background-position: 0px -146px;
    height: 29px;
    width: 103px;
    background-repeat: no-repeat;
    margin: 10px;`;

const LoginIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    background-image: url(/static/media/insta-sprite.d0e3cb0e.png);
    background-position: 0px -72px;
    height: 70px;
    width: 70px;
    background-repeat: no-repeat;
    `;

const LoginInput = styled.input`
    font-size: 1.2rem;
    padding: 20px 1rem;
    outline: 0;
    border: none;
    margin-bottom: 5px;
    font-family: Roboto, sans-serif;
    border-radius:3px;
    
    &:first-child {
        margin-top:30px;
    }
    `;

const LoginButton = styled.button`
    border-radius: 4px;
    padding: 10px;
    margin-top: 30px;
    font-size: 1.2rem;
    font-family: "Open Sans", sans-serif;
    color: #333333;
    outline: 0;
    `;


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
            <LoginPage>
                <LoginWrapper>  
                    <LoginLogo></LoginLogo>
                    <LoginIcon></LoginIcon>
                    <LoginInput 
                        type="text" 
                        placeholder="username" 
                        onChange={this.onChange}
                        value = {this.state.userField} />
                    <LoginInput type="password" placeholder="password" />
                    <LoginButton onClick={this.login}>Log In</LoginButton>
                    
                </LoginWrapper>   
            </LoginPage>
        )
    }
}

export default Login;