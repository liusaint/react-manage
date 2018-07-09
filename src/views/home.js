
import React, { Component } from 'react';
import $ from 'jQuery';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Home extends Component {
	constructor() {
		super();

	}
	componentWillMount() {
		var that = this;
		$.ajax({
				url: 'http://localhost:3001/home',
				dataType: 'json',
			})
			.done(function(data) {
				that.props.initPageList(data.data);
			})

	}
	render() {
		var pageList = this.props.pageList;
		return (<div> 
				{
					pageList.map(
						(page) => {
							return (<Link to={page.url} key={page.id}>{page.text}</Link>);
						}
					)
				}

				</div>)
	}
}

function mapStateToProps(state){
	return {
		pageList:state.homeReducer.pageList
	}
}
function mapDispatchToProps(dispatch){
	return {
		initPageList:function(pageList){
			dispatch({
				type:'INIT_PAGE_LIST',
				pageList:pageList
			})
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);