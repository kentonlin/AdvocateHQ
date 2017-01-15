

import React from 'react'
import Cart from '../src/Cart'
import Stripe from '../src/Stripe'

var Buttons = React.createClass ({

	getInitialState() {
		return { cartArr: [],
						total: 0

		}
	},

	handleSubmit5(e) {
		e.preventDefault()
		this.state.cartArr.push(5)
		console.log('5 sumbit', this.state.cartArr)
	},

	handleSubmit25(e) {
		e.preventDefault()
		this.state.cartArr.push(25)
		console.log('25 sumbit', this.state.cartArr)// this.setState({cartArr: cartArr})
	},

	handleSubmit50 (e) {
		e.preventDefault()
		this.state.cartArr.push(50)
		// this.setState({cartArr: cartArr})
console.log('50 sumbit', this.state.cartArr)
	},

	handleSubmit100 (e) {
		e.preventDefault()
		this.state.cartArr.push(100)
		// this.setState({cartArr: cartArr})
console.log('100 sumbit', this.state.cartArr)
	},

	checkout(e) {
		e.preventDefault()
		var cartArr = this.state.cartArr
		var total = this.state.total

		this.setState({cartArr:cartArr})
		
		console.log('here',cartArr)
		for (var i = 0; i < this.state.cartArr.length; i++){
			total += this.state.cartArr[i] 
		}
		this.setState({
			total: total
		})

	},

	render () {
		return (
			<div>
			
				<button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={this.handleSubmit5}>
        5$</button>
        <button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={this.handleSubmit25}>
        25$</button>
        <button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={this.handleSubmit50}>
        50$</button>
        <button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={this.handleSubmit100}>
        100$</button>
        <button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={this.checkout}>
        Checkout</button>

        <Cart cartArr={this.state.cartArr}
        total={this.state.total} />



       <div>
        <Stripe {...this.props} token={this.props.token} />
      </div>
      </div>
		)
	}
})

export default Buttons





