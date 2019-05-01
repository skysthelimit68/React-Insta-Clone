import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchField: "",
      isLoggedIn: false
    }
  }

  componentDidMount() {
    let loginStatus;
    if (localStorage.getItem('user')) {
      loginStatus = true;
    }
    this.setState({
      posts: dummyData,
      isLoggedIn: loginStatus
    })
  }

  logout = () => {
    if (localStorage.getItem('user')) {
      localStorage.removeItem("user")
      this.setState({
        isLoggedIn: false,
      })
    }
  }

  getLoginStatus = (status) => {
    this.setState({
      isLoggedIn: status
    })
  }


  onChange_SearchField = event => {
    this.setState({
      searchField: event.target.value,
    })
  }

  render() {
    return (
      <ComponentFromWithAuthenticate
        onChange={this.onChange_SearchField}
        onSubmit={this.onSubmit_Search}
        searchField={this.state.searchField}
        posts={this.state.posts}
        loginStatus={this.getLoginStatus}
        logout={this.logout}
      />
    )
  }
  /* render() {
     return (
       <PostPage 
         onChange = {this.onChange_SearchField} 
         onSubmit = {this.onSubmit_Search} 
         searchField = {this.state.searchField} 
         posts = {this.state.posts} 
         user = {this.state.user}
       />
     )
   }*/


  /* render() {
     return (
     <div className="App">
       <header className="">
        
        
       </header> 
       <SearchBar 
         
       />
       <PostContainer 
         
       />
     </div>
   );*/
}










export default App;
