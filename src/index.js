import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import {
	createStore
} from 'redux';
import {
	Provider
} from 'react-redux';
import routes from './routes/index.js';

import {
	syncHistoryWithStore
} from 'react-router-redux';
import {
	browserHistory
} from 'react-router'



var reducer = function(state, action) {
	if (!state) {
		state = {};
	}
	return state;
}
var store = createStore(reducer);


ReactDOM.render(
	routes(browserHistory), document.getElementById('root'));


registerServiceWorker();