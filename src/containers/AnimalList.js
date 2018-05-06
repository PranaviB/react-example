import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectAnimal} from '../actions'
import {bindActionCreators} from 'redux'

class AnimalList extends Component {

	constructor(){
		super();
	}

	renderAnimals(){
		let counter = 0;
		return this.props.animals.map(animal => {
				counter += 1;
				return (<div className="row" key={counter} onClick={() => {this.props.selectAnimal(animal)}}>
					<div className="col-sm-1">
						<p> {animal.name} </p> 
					</div>
					
				</div>)
			})
	}

	render(){
		console.log(this)
		return(
			<div >
				<div className="row">
					<div className="col-sm-1">
						<p> Name </p> 
					</div>
				</div>
				{this.renderAnimals()}
			</div>)
	}
}

// Bind reducers to get state as props
function mapStateToProps(state){
	console.log(state)
	return {
		animals: state.animals,
		selectedAnimal: state.selectedAnimal
	}
}

// Bind actions to push state to reducers 
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		selectAnimal
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList)