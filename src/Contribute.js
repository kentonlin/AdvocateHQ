import React, { Component } from 'react';
import './Contribute.css';
import Card1 from './Card1.js';
import Card2 from './Card2.js';
import Card3 from './Card3.js';
import Card4 from './Card4.js';


import { Nav, NavGroup, NavItem, Icon, Image, NavToggle, Button, Select } from 're-bulma';
import Buttons from './Buttons.js'
var Router = require('react-router');
var Link = Router.Link;

class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 75,
      cartArr: [],
      total: 0,
      quantityArr: []
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.setTotal = this.setTotal.bind(this);
  }

  handleEvent(e){
    console.log('value',e.target.value);
    var array = this.state.quantityArr.slice()
    array.push(e.target.value)
    // e.preventDefault()
    this.setState({
      "quantityArr": array
    }, this.getTotal)
  }

  getTotal(){
    var mapped = this.state.quantityArr.map(function(element){
      return +element * 5;
    })
    console.log(mapped);
    let total = this.state.total
    var reduced = mapped.reduce(function(total, element){
      return total + element;
    },0)
    console.log('reduced',reduced);

    this.setTotal(reduced);
  }

  setTotal(result){
    this.setState({
      total: result
    });
  }



  handleSubmit5(e) {
     var cartArr = this.state.cartArr
    var total = this.state.total

    cartArr.push(5)
    console.log('5 sumbit', this.state.cartArr)

    console.log('here',cartArr)
    var total = cartArr.reduce(function(a,b){
      return +a + +b;
    },0)
    console.log('reduce total',total)
    this.setState({
      total: total
    })
    console.log('total',this.state.total)


  }

  handleSubmit25(e) {
     var cartArr = this.state.cartArr
    var total = this.state.total

    cartArr.push(25)
    console.log('25 sumbit', this.state.cartArr)

    console.log('here',cartArr)
    var total = cartArr.reduce(function(a,b){
      return +a + +b;
    },0)
    console.log('reduce total',total)
    this.setState({
      total: total
    })
    console.log('total',this.state.total)

  }


  handleSubmit50 (e) {
    var cartArr = this.state.cartArr
    var total = this.state.total

    cartArr.push(50)
    console.log('50 sumbit', this.state.cartArr)

    console.log('here',cartArr)
    var total = cartArr.reduce(function(a,b){
      return +a + +b;
    },0)
    console.log('reduce total',total)
    this.setState({
      total: total
    })
    console.log('total',this.state.total)
  }

  handleSubmit100 (e) {
    var cartArr = this.state.cartArr
    var total = this.state.total

    cartArr.push(100)
    console.log('100 sumbit', this.state.cartArr)

    console.log('here',cartArr)
    var total = cartArr.reduce(function(a,b){
      return +a + +b;
    },0)
    console.log('reduce total',total)
    this.setState({
      total: total
    })
    console.log('total',this.state.total)
  }


checkout(e) {

    var cartArr = this.state.cartArr
    var total = this.state.total

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
               <Card1 handleEvent= {this.handleEvent} />
               </div>
               <div className="inline">
                 <Card2 handleEvent= {this.handleEvent}/>
               </div>
             </div>
             <div className="inlineContainer donate">
              <div className="inline">
                 <Card3 handleEvent= {this.handleEvent}/>
               </div>
               <div className="inline">
                 <Card4 handleEvent= {this.handleEvent}/>
              </div>
            </div>

            <Buttons handleSubmit5={this.handleSubmit5.bind(this)}
            handleSubmit25={this.handleSubmit25.bind(this)}
            handleSubmit50={this.handleSubmit50.bind(this)}
            handleSubmit100={this.handleSubmit100.bind(this)}
            checkout={this.checkout.bind(this)}/>

          </div>

        </div>
        <div>
        TOTAL {this.state.total}
        </div>
        <div>
         <Link to={'/cart/' + this.state.quantityArr + '/' + this.state.total}>
      <button className="btn hidden-sm-down" type='submit'>
        <span className="glyphicon glyphicon-search"></span>
        CHECKOUT
      </button>
        </Link>
      </div>
    </div>

    );
  }
}

export default Contribute;
