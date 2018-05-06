import React, {Component} from 'react'
import {connect} from 'react-redux'

class AnimalDetails extends Component {
	render(){
		if(this.props.selectedAnimal){
			return(
			<div >
				<div className="row" >
					<lable> Name: </lable>
					<p>{this.props.selectedAnimal.name}</p>
				</div>
				<div className="row" >
					<lable> Species: </lable>
					<p>{this.props.selectedAnimal.species}</p>
				</div>
				<div className="row" >
					<lable> BirthYear: </lable>
					<p>{this.props.selectedAnimal.birthYear}</p>
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
export default connect(mapStateToProps)(AnimalDetails)