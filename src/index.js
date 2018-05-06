import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const createdStore = applyMiddleware(thunk)(createStore)
const store = createdStore(reducers)

ReactDOM.render(
	<Provider store={store}> 
	<App />
	</Provider>, document.getElementById('root'));

registerServiceWorker();
