import React, {Component} from 'react';

import axios from "axios";
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Home extends Component {

    componentWillMount() {
        var that = this;
        this
            .props
            .fetchList();
    }
    render() {
        var pageList = this.props.pageList;
        return ( < div > {
            pageList.map((page) => {
                return (< Link to = {
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
					/div >)
            }}

        function mapStateToProps(state) {
            return {pageList: state.homeReducer.pageList}
        }

        function fetchList(dispatch) {
            dispatch({type: 'FETCH_LIST_BEFORE'});
            var url = 'http://localhost:3001/home';
            axios({url}).then((response) => {
                dispatch({type: 'INIT_PAGE_LIST', pageList: response.data.data});
            });
        }

        function mapDispatchToProps(dispatch) {
            return {
                initPageList: function (pageList) {
                    dispatch({type: 'INIT_PAGE_LIST', pageList: pageList})
                },
                fetchList: function () {
                    dispatch(fetchList);
                }
            }
        }

        export default connect(mapStateToProps, mapDispatchToProps)(Home);