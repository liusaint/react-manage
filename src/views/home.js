
import React, { Component } from 'react';
import $ from 'jQuery';
import {Link} from 'react-router';

class Home extends Component{
	constructor(){
		super();
		this.state = {
			pageList:[
			]
		}
	}
	componentWillMount(){
		var that = this;
		$.ajax({
			url: 'http://localhost:3001/home',		
			dataType: 'json',
		})
		.done(function(data) {
			that.setState({
				pageList:data.data
			})
		})	

	}
	render() {
			var pageList = this.state.pageList;
			return ( <div> 
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

export default Home;