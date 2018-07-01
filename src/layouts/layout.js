import { Button } from 'element-react';

import 'element-theme-default';
import React, { Component } from 'react';
import Left from './left.js';
import Header from './header.js';
import Footer from './footer.js';
import HisTab from './hisTab.js';
import './layout.less';

class Layout extends Component{
	render(){
		return (
			<div className = "layout">
			<Header></Header>
			<Left></Left>
			<div>
			<HisTab></HisTab>
			<div className="main-content">
			{this.props.children}
			</div>
			</div>
			<Footer></Footer>

			</div>
			)
	}
}

export default Layout;