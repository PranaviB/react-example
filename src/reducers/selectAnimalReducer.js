export default function(state=null, action){
	// console.log("Reducer State:" + state)
	// console.log("Reducer Action:" + JSON.stringify(action))
	switch(action.type){
		case 'ANIMAL_CLICKED':
			return action.payload
	}
	return state
}