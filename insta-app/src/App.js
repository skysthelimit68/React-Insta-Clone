import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
      <header className="App-header">
        <SearchBar onChange = {this.onChange_SearchField} onClick = {this.onClick_SearchButton} />
       
      </header>
    </div>
  );
  }


}







export default App;
