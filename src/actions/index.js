import axios from 'axios'
import { FetchAnimals } from './constants'

export function selectAnimal(animal){
	return {
		type: "ANIMAL_CLICKED",
		payload: animal
	}
}

export function fetchAnimalsList(){
	console.log("calling..")
	return function (distpatch){
		let url = "http://localhost:3000/animals"
		const request = axios.get(url)
		
		request.then(response => {
				distpatch({
					type: FetchAnimals,
					payload: response.data
				})
			})
			.catch(err => {console.log(err)})
	 
	}
}