import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LightSwitch from './setState.js';
import ParentFile from './parentFile.js';
import DataParent from "./dataParent.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Famous peeps and their taco experience.
        </p>
        < LightSwitch />
        < DataParent />
      </div>
    );
  }
}

export default App;
