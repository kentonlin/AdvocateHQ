import React, { Component } from 'react';
import './Contribute.css';
import Card1 from './Card1.js';
import { Nav, NavGroup, NavItem, Icon, Image, NavToggle, Button, Select } from 're-bulma';


class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 75
    };
  }
  render() {
    return (
      <div>
        <div className="container">

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
          {/* <div className="stand"> */}
          <div className="floatLeft">
            <div className="donate">
              <h2>
                Campaign Crowdfunding, Enabled
              </h2>
              <h2>
                Donate to a cause
              </h2>
              <div>
                Want to donate to the specific needs of any campaign?  Advocate makes it simple to find unique and cool donation opportunities that interest you. The best part is knowing exactly how your donations are being used and receiving thanks from the campaign.
              </div>
            </div>

            <div className="inlineContainer donate">
              Filter By:
              <Select className="inline">
                <option> Recent </option>
                <option>With options</option>
              </Select>
              <Select className="inline">
                <option> Category </option>
                <option>With options</option>
              </Select>
              Sort By:
              <Select className="inline">
                <option> Priority </option>
                <option>With options</option>
              </Select>
            </div>

            <Card1 />
          </div>

        </div>

      </div>

    );
  }
}

export default Contribute;
