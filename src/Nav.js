import React, { Component } from 'react';
import './Nav.css';
import { Nav, NavGroup, NavItem, Icon, Image, NavToggle, Button} from 're-bulma';

class Navigate extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavGroup align="left">
            <NavItem>
              advocate
            </NavItem>
            <NavItem>
              <Icon icon="fa fa-search" size="isSmall" />
              Enter an address to find representatives
            </NavItem>
          </NavGroup>
          <NavToggle />
          <NavGroup align="right" isMenu>
            <NavItem>
              Create a Campaign
            </NavItem>
            <NavItem>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bernie_Sanders.jpg/220px-Bernie_Sanders.jpg" size="is24X24" style={{}} />
            </NavItem>
          </NavGroup>
        </Nav>
      </div>
    );
  }
}

export default Navigate;
