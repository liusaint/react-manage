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
import homeReducer from './views/homeRedux.js'
import thunk from 'redux-thunk'

var logger = ({ dispatch, getState }) => next => action => {
  console.log(action);
  return next(action);
}



const routerMid = routerMiddleware(browserHistory);



var finaReducer = combineReducers({

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