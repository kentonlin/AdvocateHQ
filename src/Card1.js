import React, { Component } from 'react';
import './Card.css';
import { Progress, Input } from 're-bulma';
import CardButton from './CardButton'
import Total from './Total'
import card1 from './card1.png';


class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 38,
      total: 0,
      quantity: 0
    };
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(event){
    this.setState({quantity: event.target.value}
    );

  }

  componentWillMount() {
    console.log('props',this)
  }

  render() {
    return (
      <div className="cardContainer">
        <img src={card1} alt="Card Image" height="200px" width="100%"/>
        <div className="card">
          <div className="leftContainer">
            <h2> Title: Bernie </h2>
          </div>
          <div className="leftContainer">
            <div>  We might not have music, but we do like call and response, especially the civic kind.  Help us pull together a Townhall with your fellow citizens. </div>
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

export default Card1;
