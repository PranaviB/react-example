import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectAnimal, fetchAnimalsList} from '../actions'
import {bindActionCreators} from 'redux'

class AnimalList extends Component {

	constructor(){
		super();
	}

	// constructor
	// lifecycle methods
	// ownmethods
	// render

	componentWillMount(){
		this.props.fetchAnimalsList();
	}

	renderAnimals(){
		let counter = 0;
		return this.props.animalsList.map(animal => {
				counter += 1;
				return (<div className="row" key={counter} onClick={() => {this.props.selectAnimal(animal)}}>
					<div className="col-sm-1">
						<p> {animal.name} </p> 
					</div>
					
				</div>)
			})
	}

	render(){
		// console.log(this)
		if(!this.props.animalsList){
			return(<div>Loading...</div>)
		}

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
	// console.log(state)
	return {
		animals: state.animals,
		selectedAnimal: state.selectedAnimal,
		animalsList: state.getAnimalsList
	}
}

// Bind actions to push state to reducers 
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		selectAnimal,
		fetchAnimalsList
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList)