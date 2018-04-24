import {combineReducers} from 'redux';
import animalReducer from './animalReducer'
import selectedAnimal from './selectAnimalReducer'

const rootReducer = combineReducers({
  animals: animalReducer,
  selectedAnimal: selectedAnimal
});

export default rootReducer;
