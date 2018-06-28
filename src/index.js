import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import {
	createStore,
	applyMiddleware,
	combineReducers
} from 'redux';
import {
	Provider,
} from 'react-redux';
import routes from './routes/index.js';

import {
	syncHistoryWithStore,
	routerMiddleware,
	routerReducer
} from 'react-router-redux';
import {
	browserHistory
} from 'react-router'

const routerMid = routerMiddleware(browserHistory);

var reducer = function(state, action) {
	if (!state) {
		state = {};
	}
	return state;
}

var finaReducer = combineReducers({
	...reducer,
	routing:routerReducer
})
var store = createStore(finaReducer,applyMiddleware(routerMid));
var history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(
	(<Provider store={store}>
		{routes(history)}
		</Provider>)
	, document.getElementById('root'));


registerServiceWorker();