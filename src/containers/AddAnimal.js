import React, {Component} from 'react'

class AddAnimal extends Component{
	constructor(props){
		super(props)
		this.state = {
			name: '',
			birthYear: '',
			species: ''
		}
	}

	render(){

		return(
			<form>
				<div className="row">
					<div className="col-sm-3">
						Name
					</div>
					<div className="col-sm-5">
						<input type="text" value={this.state.name} />
					</div>
				</div>
				<br/>
				<div className="row">
					<div className="col-sm-3">
						Year
					</div>
					<div className="col-sm-5">
						<input type="text" value={this.state.year} />
					</div>
				</div>
				<br/>
				<div className="row">
					<div className="col-sm-3">
						Species
					</div>
					<div className="col-sm-5">
						<input type="text" value={this.state.species} />
					</div>
				</div>
			</form>
		)
	}
}

export default AddAnimal