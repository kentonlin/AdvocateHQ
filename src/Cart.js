import React from 'react'

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartArr: []
    };
  }


  render() {
  	var cartArr = this.state.cartArr
		// cartArr[0] = +cartArr[0]
		// console.log('cartArr',cartArr)
  	var cartArr = this.props.routeParams.cartArr.split(',')
  	var cartArr = cartArr.map(function(item){
  		return item = +item
  	})
  	console.log('cartArr',cartArr)
  	// cartArr.push(this.props.routeParams.cartArr)
  	return (
  		<div>
  		{console.log('cart',cartArr)}
  		test

  		</div>

  	)
  }

 }

export default Cart
		// {props.cartArr.map((cartArr,i) => (
		// 	<div key={i}>
		// 				<span style={{padding:'15px'}}>Donation    {cartArr}</span>
		// 	</div>
		// )
		// )}
		// <h3> Total </h3>
		// {props.total}