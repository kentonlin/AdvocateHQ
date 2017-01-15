import React, { Component } from 'react';
import './Card.css';
import { Progress } from 're-bulma';

class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 30
    };
  }
  render() {
    return (
      <div className="cardContainer">
        <img src="https://s.bsd.net/bernie16/main/page/-/website/fb-share.png" alt="Card Image" height="200px" width="100%"/>
        <div className="card">
          <div className="leftContainer">
            <h2> Title: Bernie </h2>
          </div>
          <div className="leftContainer">
            <div>  Description: Description for Bernie </div>
          </div>
          <div className="leftContainer">
            {this.state.percent}% of Goal Reached
          </div>
          <div className="center">
            <Progress value={this.state.percent} max="100" style={{ marginBottom: '5px' }} />
          </div>

          // div container
            // button on click calls function passProps
              // button will change amount by change to total
                // passProps will pass total, quantity, card image, and title to Contribute

        </div>
      </div>
    );
  }
}

export default Card1;
