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

class Home extends Component {
	constructor() {
		super();

	}
	componentWillMount() {
		var that = this;
		// $.ajax({
		// 		url: 'http://localhost:3001/home',
		// 		dataType: 'json',
		// 	})
		// 	.done(function(data) {
		// 		that.props.initPageList(data.data);
		// 	})
		this.props.fetchList();
	}
	render() {
			var pageList = this.props.pageList;
			return ( < div > {
					pageList.map(
						(page) => {
							return ( < Link to = {
									page.url
								}
								key = {
									page.id
								} > {
									page.text
								} < /Link>);
							}
						)
					}

					<
					/div>)
				}
			}

			function mapStateToProps(state) {
				return {
					pageList: state.homeReducer.pageList
				}
			}

			function fetchList(dispatch) {
				dispatch({
					type: 'FETCH_LIST_BEFORE'
				});
				$.ajax({
						url: 'http://localhost:3001/home',
						dataType: 'json',
					})
					.done(function(data) {
						dispatch({
							type: 'INIT_PAGE_LIST',
							pageList: data.data
						});
					})
			}

			function mapDispatchToProps(dispatch) {
				return {
					initPageList: function(pageList) {
						dispatch({
							type: 'INIT_PAGE_LIST',
							pageList: pageList
						})
					},
					fetchList: function() {
						dispatch(fetchList);
					}
				}
			}



			export default connect(mapStateToProps, mapDispatchToProps)(Home);