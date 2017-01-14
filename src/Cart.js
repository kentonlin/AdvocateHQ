import React from 'react'

const Cart = (props) => (

	
		<div>
		{props.cartArr.map((cartArr,i) => (
			<div key={i}>
						<span style={{padding:'15px'}}>Donation{cartArr}</span>
			</div>
		)
		)}
		<h3> Total </h3>
		{props.total}
		</div>

	

)

export default Cart