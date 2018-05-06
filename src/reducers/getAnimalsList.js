import { FetchAnimals } from '../actions/constants'

export default function getAnimalsList(state=null, action){
	switch(action.type){
		case FetchAnimals:
			return action.payload
		default:
			return state
	}
} 