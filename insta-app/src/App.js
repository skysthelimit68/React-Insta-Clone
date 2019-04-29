import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts : dummyData,

    }
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
  }


}







export default App;
