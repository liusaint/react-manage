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

var layoutReducer = function(state, action) {
	if (!state) {
		state = {
			hisTabs:[
			{
				title: 'Tab 1',
				name: 'Tab 1',

			}, {
				title: 'Tab 2',
				name: 'Tab 2',

			},
			],//上面的标签
			hisTabIndex:2
		};
	}
	switch (action.type) {
		case 'REMOVE_TAB':
		debugger;

			state = {
				...state,
				hisTabs: [
					...state.hisTabs.slice(0, action.index),
					...state.hisTabs.slice(parseInt(action.index) + 1)
				]
			}
			break;
		case 'ADD_TAB':
		debugger;
			state = {
				...state,
				hisTabs: [
					...state.hisTabs,
					action.tab
				],
				hisTabIndex:action.hisTabIndex
			}
			break;
		default:

			break;
	}
	return state;
}

var finaReducer = combineReducers({
	layoutReducer,
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