import React, { Component } from 'react';
import './Contribute.css';
import Card1 from './Card1.js';
import Card2 from './Card2.js';
import Card3 from './Card3.js';
import Card4 from './Card4.js';


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

            <div className="inlineContainer donate">
              <div className="inline">
                <Card1 />
              </div>
              <div className="inline">
                <Card2 />
              </div>
            </div>
            <div className="inlineContainer donate">
              <div className="inline">
                <Card3 />
              </div>
              <div className="inline">
                <Card4 />
              </div>
            </div>

          </div>

        </div>


        // on submit of button continue;
          //pass props while also linking to component checkout
            // pass total, totalArray, props of various cards 

        // contribute amounts which will have buttons for different amounts and input field
          // on submit Link to route: component (checkout)
          // pass state of total

      </div>

    );
  }
}

export default Contribute;
