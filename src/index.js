import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import routes from './routes/index.js';

import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory  } from 'react-router'


var reducer = function(state,action){
	if(!state){
		state = {};
	}
	return state;
}
var store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);
	ReactDOM.render((<Provider store={store}><div>
		{routes(history)}
		</div></Provider>), document.getElementById('root'));
registerServiceWorker();
