import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Contribute from './Contribute.js';
import Navigate from './Nav.js';
import { Image } from 're-bulma';
import kirsten from './Kirsten.png'


class App extends Component {
  render() {
    return (
      <div className="App">

<<<<<<< HEAD
        <Navigate />
          <img src={kirsten} style={{ borderRadius: "50%", width: '100px', height: '100px', display: 'inline'}} />
          <div className="inline">

          <div>
            Democrat for U.S. Senate
          </div>
          <div>
            Kirsten Gillibrand
          </div>
          <div>
            Senator, U.S. Senate New York
          </div>
          <div>
            Incumbent
          </div>
        </div>
        <Contribute />
=======
      <Navigate />
      <Contribute />
>>>>>>> 4acd2d4c1d7a8f67daa466801fe165f2f5af3711
      </div>
    );
  }
}

export default App;
