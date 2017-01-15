

import React from 'react'
import Cart from '../src/Cart'
import Stripe from '../src/Stripe'

var Buttons = (props) => (

	
		
			<div>

				<button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={props.handleSubmit5}>
        5$</button>
        <button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={props.handleSubmit25}>
        25$</button>
        <button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={props.handleSubmit50}>
        50$</button>
        <button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={props.handleSubmit100}>
        100$</button>
        <button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={props.checkout}>
        Checkout</button>

      </div>
		)
	

export default Buttons





