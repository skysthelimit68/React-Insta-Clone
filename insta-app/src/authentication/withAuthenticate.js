import React from 'react';
import Login from './../components/Login/Login'

const withAuthenticate = PostComponent => LoginComponent => class extends React.Component {
    
    render(){
        if(!localStorage.getItem('user')) {
            return (
                <LoginComponent 
                    loginStatus = {this.props.loginStatus}
                />
            )
        } else {
            return (
                <PostComponent 
                    onChange = {this.props.onChange} 
                    onSubmit = {this.props.onSubmit} 
                    searchField = {this.props.searchField} 
                    posts = {this.props.posts} 
                    user = {this.props.user} 
                    logout = {this.props.logout}
                />
            )
        }

        
    } 
}

export default withAuthenticate;