
import React, { Component } from 'react';

class root extends Component{
	render(){
		return (<div className="root-com">{this.props.children}</div>)
	}
}

export default root;