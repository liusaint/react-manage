import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'element-theme-default';

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
import homeReducer from './views/homeRedux.js'
import thunk from 'redux-thunk'

var logger = ({ dispatch, getState }) => next => action => {
  console.log(action);
  return next(action);
}



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

	}
	return state;
}

var finaReducer = combineReducers({
	layoutReducer,
	routing:routerReducer,
	homeReducer
})
var store = createStore(finaReducer,applyMiddleware(logger,routerMid,thunk));
var history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(
	(<Provider store={store}>
		{routes(history)}
		</Provider>)
	, document.getElementById('root'));


registerServiceWorker();