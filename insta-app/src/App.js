import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

import PostPage from './components/PostContainer/PostPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "skysthelimit68",
      posts : [],
      searchField: "",
    }
  } 

  componentDidMount() {
    this.setState({
      posts : dummyData,
    })
  }


  onChange_SearchField = event => {
    this.setState({
      searchField : event.target.value,
    })
  }

  render() {
    return (
      <PostPage 
        onChange = {this.onChange_SearchField} 
        onSubmit = {this.onSubmit_Search} 
        searchField = {this.state.searchField} 
        posts = {this.state.posts} 
        user = {this.state.user}
      />
    )
  }
 

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
