
import React from 'react'
import Total from '../src/Total'

var CardButton = React.createClass({

	getInitialState () {
		return {
			cardButtonInput: '',
			cardButtonArr: [],
			total: 0
		}
	},

	onUpdate(event) {
		this.setState({cardButtonInput:event.target.value})
		console.log('onupdate',event.target.value)


	},

	buttonHandleSubmit() {
		var cardButtonArr = this.state.cardButtonArr
		var total = this.state.total
		cardButtonArr.push(this.state.cardButtonInput)
	
		this.setState({cardButtonArr:cardButtonArr})
		console.log('cardButtonArr',cardButtonArr)
		
		var total = cardButtonArr.reduce(function(a,b){
			return +a + +b;
		},0)
		console.log('total',total)
		this.setState({total:total})
		console.log('setStatetotal',this.state.total)

	},


	render() {
		return (
			<div>
				<input className="form-control"
				type="text"
				onChange={this.onUpdate}
				value={this.state.cardButtonInput} />

				<button  style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={this.buttonHandleSubmit}>
        submit</button>
			
			<Total cardButtonArr={this.state.cardButtonArr} 
							total={this.state.total}
							/>
			
		</div>


		)
	}
})

export default CardButton