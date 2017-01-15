import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import democrat from './democrat.png'
import Contribute from './Contribute.js';
import Navigate from './Nav.js';
import { Nav, NavGroup, NavItem, Icon, Image, NavToggle, Button, Select } from 're-bulma';

import kirsten from './Kirsten.png'


class App extends Component {
  render() {
    return (
      <div>
        <Navigate />
        <div className="AppContainer">
          <div className="App">
            <div className="inlineContainerApp">
              <img src={kirsten} style={{ borderRadius: "50%", width: '100px', height: '100px', display: 'inline', marginTop:"5px", marginBottom: "3px"}} />
              <div className="inlineApp">
                <div style={{color: "#6f6f6f", fontFamily: "OpenSans", fontSize: "13px"}}>
                  Democrat for U.S. Senate
                </div>
                <div style={{fontFamily: "OpenSans", fontSize: "24px", fontWeight: "600", fontStyle: "normal",
                	fontStretch: "normal",
                	lineHeight: "1.25",
                	letterSpacing: "normal"
                }}>
                  Kirsten Gillibrand
                  <span>
                    <img src={democrat} style={{borderRadius: "3px", marginLeft: "5px"}}></img>
                  </span>
                </div>
                <div style={{
                  fontFamily: "OpenSans",
                	fontSize: "15px",
                	fontWeight: "600",
                	fontStyle: "normal",
                	fontStretch: "normal",
                	lineHeight: "1.6",
                	letterSpacing: "normal",
                	color: "#3d3d3d"
                }}>
                  Senator, U.S. Senate New York
                </div>
                <div style={{
                  fontFamily: "OpenSans",
                	fontSize: "13px",
                	fontWeight: "normal",
                	fontStyle: "normal",
                	fontStretch: "normal",
                	lineHeight: "1.46",
                	letterSpacing: "normal",
                	color: "#6f6f6f"
                }}>
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
      </div>
    );
  }
}

export default App;
