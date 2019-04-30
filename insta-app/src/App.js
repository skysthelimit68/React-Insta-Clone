import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "skysthelimit68",
      posts : [],
      searchField: "",
      //searchResult: [],
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

  /*onSubmit_Search = event => {
    event.preventDefault();
    let result = this.state.posts.filter(post => {
      return post.username.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    this.setState({
      searchResult : result,

    })
  }*/

  render() {
    return (
    <div className="App">
      <header className="">
       
       
      </header> 
      <SearchBar 
        onChange = {this.onChange_SearchField} 
        onSubmit = {this.onSubmit_Search} 
        searchField = {this.state.searchField} 
      />
      <PostContainer 
        posts = {this.state.posts} 
        searchResult = {this.state.searchResult}
        user = {this.state.user}
        searchField = {this.state.searchField}
      />
    </div>
  );
  }


}







export default App;
