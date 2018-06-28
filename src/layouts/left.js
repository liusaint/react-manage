
import React, { Component } from 'react';
import {Link} from 'react-router';

class Left extends Component{
	render(){
		return (<div>left			
			<br/>
			<Link to="/1">--页1--</Link>
			<br/> 
			<Link to="/2">--页2--</Link> 
			<br/>
			</div>)
	}
}

export default Left;