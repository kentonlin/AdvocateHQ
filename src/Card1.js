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
            <div>  Description: Description for Bernie </div>
          </div>
          <div className="leftContainer">
            {this.state.percent}% of Goal Reached
          </div>
          <div className="center">
            <Progress value={this.state.percent} max="100" style={{ marginBottom: '5px' }} />
          </div>

          <Input type="text" placeholder="Text input" onChange={this.props.handleEvent}/>
          {/* <h1> {this.props.description}</h1>
          <img src="" alt="Smiley face" height="100%" width="100%"/> */}
        </div>
      </div>
    );
  }
}

export default Card1;
