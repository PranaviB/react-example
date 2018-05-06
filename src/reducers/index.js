import {combineReducers} from 'redux';
import animalReducer from './animalReducer'
import selectedAnimal from './selectAnimalReducer'
import getAnimalsList from './getAnimalsList'

const rootReducer = combineReducers({
  animals: animalReducer,
  selectedAnimal: selectedAnimal,
  getAnimalsList: getAnimalsList
});

export default rootReducer;
