import React, { Component } from 'react';
import './Card.css';
import { Progress, Input } from 're-bulma';
import card4 from './card4.png';

class Card4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 90,
      quantity: 0
    };
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(event){
    this.setState({quantity: event.target.value}
    );

  }
  render() {
    return (
      <div className="cardContainer">
        <img src={card4} alt="Card Image" height="200px" width="100%"/>
        <div className="card">
          <div className="leftContainer">
            <h2> Title: Bernie4 </h2>
          </div>
          <div className="leftContainer">
            <div>  Marie Antoinette, tragic case. But for us, this means lunch for our volunteers. They work hard, help us give ‘em more than cake (or the same ol pizza).</div>
          </div>
          <br/>
          <div className="buttonContain">
            <button type="button" onclick="alert('Hello world!')" style={{width: "88px", height: "34px", borderRadius: "3px",
  backgroundColor: "#3db7c9", border: "solid 2px #dbe7ea", color: "white"}}>${this.state.quantity * 5 || 5}</button>
  <Input type="text" placeholder="Quantity" onChange={function(event){ this.props.handleEvent(event); this.changeInput(event)}.bind(this)} style={{width: "88px"}}/>
          </div>
          <div className="leftContainer">
            {this.state.percent}% of Goal Reached
          </div>
          <div className="center">
            <Progress value={this.state.percent} max="100" style={{ marginBottom: '5px' }} />
          </div>
          {/* <h1> {this.props.description}</h1>
          <img src="" alt="Smiley face" height="100%" width="100%"/> */}
        </div>
      </div>
    );
  }
}

export default Card4;
