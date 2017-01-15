import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Contribute from './Contribute.js';
import Navigate from './Nav.js';
import { Nav, NavGroup, NavItem, Icon, Image, NavToggle, Button, Select } from 're-bulma';

import kirsten from './Kirsten.png'


class App extends Component {
  render() {
    return (
      <div className="AppContainer">    
        <div className="App">
          <Navigate />
          <div className="inlineContainerApp">
            <img src={kirsten} style={{ borderRadius: "50%", width: '100px', height: '100px', display: 'inline'}} />
            <div className="inlineApp">
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
          </div>
          <Nav>
            <NavGroup align="left">
              <NavItem>
                Overview
              </NavItem>
              <NavItem>
                Support
              </NavItem>
              <NavItem>
                Contribute
              </NavItem>
              <NavItem>
                About
              </NavItem>
            </NavGroup>
            <NavToggle />
            <NavGroup align="right" isMenu>
              <NavItem>
                <Button>
                  Follow
                </Button>
              </NavItem>
            </NavGroup>
          </Nav>

          <Contribute />
        </div>
      </div>
    );
  }
}

export default App;
