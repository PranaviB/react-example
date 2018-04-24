import React,{Component} from 'react'

class Pokemon extends Component{

	constructor(){
		super();
		this.state = {
			showMore: false,
			weight: 0,
			height: 0,
			imageUrl: ""
		}
	}

	renderPokemonDetails(){
		fetch(this.props.url)
		.then(data => data.json())
		.then(pokemon => {
			this.setState({
				showMore: true,
				weight: pokemon.weight,
				height: pokemon.height,
				imageUrl: pokemon.sprites.front_default})
		})
	}

	closeDetails(){
		this.setState({showMore: false})
	}

	render(){
		if(this.state.showMore){
			return (
				<li className="card"  onClick={this.closeDetails.bind(this)} > 
					<div className="row">
						<div className="col-sm-6">
							<p> Name: {this.props.name} </p>
							<br/>
							<p> Weight: {this.state.weight} </p> 
							<br/>
							<p> Height: {this.state.height} </p> 
						</div>
						<div className="col-sm-6">
							<img src={this.state.imageUrl} />
						</div>
					</div>
				</li>
			)	
		} else {
			return (
			<li className="card" onClick={this.renderPokemonDetails.bind(this)}> Name: {this.props.name}</li>
		)
		}
	}
}

export default Pokemon