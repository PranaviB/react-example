import React, {Component} from 'react'
import {connect} from 'react-redux'

//This component is to check availablity of global store at mulitple places

class AnimalInfo extends Component {
	render(){
		if(this.props.selectedAnimal){
			return(
			<div >
				<div className="row" >
					<lable> Name: </lable>
					<p>{this.props.selectedAnimal.name}</p>
				</div>
			</div>
			)	
		}
		
		return(<div>Select Animal To display details</div>)
	}
}

function mapStateToProps(state){
	return {selectedAnimal: state.selectedAnimal}
}

// This components is wraped in reducer, also known as higher order component
export default connect(mapStateToProps)(AnimalInfo)