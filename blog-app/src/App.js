import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> This is me editing the application </h1>
          <h3> My name is Martin Vargas-Vega </h3>
        </header>
      </div>
    );
  }
}

export default App;
