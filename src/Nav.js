import React, { Component } from 'react';
import './Nav.css';
import { Nav, NavGroup, NavItem, Icon, Image, NavToggle, Button} from 're-bulma';
import logo from './logo.png';
import avatar from './avatar.png';

class Navigate extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavGroup align="left">
            <NavItem style={{marginBottom: "2px"}}>
              <img src={logo} />
            </NavItem>
            <NavItem style={{fontFamily: "Open Sans", color: "#c0c0c0", marginBottom: "3px"}}>
              <Icon icon="fa fa-search" size="isSmall" style={{marginRight: "10px"}} />
                Enter an address to find representatives
            </NavItem>
          </NavGroup>
          <NavToggle />
          <NavGroup align="right" isMenu>
            <NavItem style={{fontFamily: "Open Sans", marginBottom: "10px"}}>
              Create a Campaign
            </NavItem>
            <NavItem>
              <Image src={avatar} size="is24X24" style={{ marginBottom: "10px"}} />
            </NavItem>
          </NavGroup>
        </Nav>
      </div>
    );
  }
}

export default Navigate;
