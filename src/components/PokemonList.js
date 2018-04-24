import React, {Component} from 'react'
import Pokemon from './Pokemon'

class PokemonList extends Component{
	constructor(){
		super()
	}

	renderPokemons(){
		let counter = 0;
		return this.props.pokemonResult.map(pokemon => {
			counter+=1;
			return <Pokemon key={counter} name={pokemon.pokemon.name} url={pokemon.pokemon.url}/>
		})
	}

	render(){
		if(this.props.pokemonResult.length > 0){
			return (
				<ul>
					{this.renderPokemons()}
				</ul>
				)
		}

		return(<div> Loading... </div>)
	}
}

export default PokemonList