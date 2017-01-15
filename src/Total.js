import React from 'react'

const Total = (props) => (

<div>
	
	{props.cardButtonArr.map((cardButton,i)=>
		<div>
			<span style={{padding:'15px'}}> {cardButton} </span>
		</div>


	)}
	<span>TOTAL {props.total}</span>

</div>

)

export default Total