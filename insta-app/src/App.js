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
      posts : dummyData,
      searchField: "",


    }
  }

 

  onChange_SearchField = event => {

  }

  onClick_SearchButton = event => {

  }

  
  


  render() {
    return (
    <div className="App">
      <header className="">
       
       
      </header> 
      <SearchBar onChange = {this.onChange_SearchField} onClick = {this.onClick_SearchButton} />
      <PostContainer posts = {this.state.posts} user = {this.state.user}/>
    </div>
  );
  }


}







export default App;
