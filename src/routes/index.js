import React from 'react'

import { Router, Route,browserHistory } from 'react-router'
import Page1 from '../views/page1.js'
import Page2 from '../views/page2.js'
import Layout from '../layouts/layout.js';



//这样导出去。这里面也可以用jsx。
const routes = browserHistory => (
  <Router history={browserHistory}>
	  <Route path="/" component={Layout}>
		  <Route path="/1" component={Page1}/>
		  <Route path="/2" component={Page2}/>
	  </Route>
  </Router>
);

export default routes;