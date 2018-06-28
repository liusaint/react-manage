
import React, { Component } from 'react';
import Left from './left.js';
import Header from './header.js';
import Footer from './footer.js';
import HisTab from './hisTab.js';

class Layout extends Component{
	render(){
		return (
			<div>
			<Header></Header>
			<Left></Left>
			<div>
			<HisTab></HisTab>
			{this.props.children}
			</div>
			<Footer></Footer>

			</div>
			)
	}
}

export default Layout;