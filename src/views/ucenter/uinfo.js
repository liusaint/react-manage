import React, {
	Component
} from 'react';
import $ from 'jquery';
import {
	Link
} from 'react-router';
import {
	connect
} from 'react-redux';


class Uinfo extends Component {
	constructor() {
		super();
	}
	componentWillMount() {
	}
	render() {
		var pageList = this.props.pageList;
		return ( <div> 
			个人中心
			</div>)
		}
	}



	export default Uinfo;