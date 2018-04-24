import React, {Component}  from 'react'
import PokemonList from './PokemonList'

class Select extends Component
{
	constructor(){
		super();

		this.state = {
			type: "1",
			pokemonList: []
		}
	}

	onSelectType(event){
		this.setState({type: event.target.value})
	}

	onSearch(event){
		event.preventDefault();
		const API = `https://pokeapi.co/api/v2/type/${this.state.type}`
		fetch(API)
			.then(result => result.json())
			.then(data => {
				this.setState({pokemonList: data.pokemon})
			})
			.catch(error => console.log(error))
	}

	render(){
		return(
			<div>
				<div className="row">
					<div className = "col-sm-4">
						<select className="form-control" onChange= {this.onSelectType.bind(this)}>
							<option value="1"> Normal </option>
							<option value="2"> Fighting </option>
							<option value="3"> Flying </option>
						</select>
					</div>
					<div className="col-sm-1">
						<button onClick={this.onSearch.bind(this)} className="btn btn-success"> Search </button>
					</div>
				</div>
				<br/>
				<div className="row">
					<div className = "col-sm-4">
						<PokemonList pokemonResult ={this.state.pokemonList}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Select