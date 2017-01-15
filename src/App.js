import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contribute from './Contribute.js';
import Navigate from './Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigate />
      <Contribute />
      </div>
    );
  }
}

export default App;
