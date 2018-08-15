import React from 'react'

import { Router, Route,browserHistory } from 'react-router'
import Page1 from '../views/page1.js'
import Page2 from '../views/page2.js'
import Layout from '../layouts/layout.js';
import root from '../layouts/root.js';
import Home from '../views/home.js';
import Uinfo from '../views/ucenter/uinfo.js';
import Notice from '../views/ucenter/notice.js';
import Testh5 from '../views/testh5.js';

function enter(){
	console.log(666);
}

//这样导出去。这里面也可以用jsx。
const routes = browserHistory => (
  <Router history={browserHistory}>
  	<Route path="/" component={root}　onEnter={enter}>
	  <Route path="/" component={Layout}>
	  	<Route path="/home" component={Home}/>
		  <Route path="/1" component={Page1}/>
		  <Route path="/2" component={Page2}/>
		  <Route path="/uinfo" component={Uinfo}/>
		  <Route path="/notice" component={Notice}/>
	  </Route>
		<Route path="/testh5" component={Testh5}/>
	</Route>  
  </Router>
);

export default routes;