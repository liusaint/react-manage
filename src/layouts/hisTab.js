
import React, { Component } from 'react';
import {Button,Tabs} from 'element-react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class HisTab extends Component{

	static defaultProps:{
		hisTabs:[],
		hisTabIndex:1
	}
	static propTypes:{
		hisTabs:PropTypes.array,
		hisTabIndex:PropTypes.number
	}
	constructor() {
		super();
	}

	addTab() {
		const { hisTabs, hisTabIndex } = this.props;
		const index = hisTabIndex + 1;
		var tab = {
			title: 'new Tab',
			name: 'Tab ' + index,
			content: 'new Tab content',
		}
		this.props.onAddTab(tab,index);

	}

	removeTab(tab) {
		debugger;
		const { hisTabs, hisTabIndex } = this.props;
		var index = tab.key.replace(/^\.\$/, '');
		this.props.onRemoveTab(index);

	}

	render() {
		debugger;
		return (
			<div className="top-tab-wrap">
			<div style={{marginBottom: '20px'}}>
			<Button size="small" onClick={() => this.addTab()}>add tab</Button>
			</div>
			<Tabs type="card" value="Tab 2" onTabRemove={(tab) => this.removeTab(tab)}>

			{
				this.props.hisTabs.map((item, index) => {
					return <Tabs.Pane key={index} closable label={item.title} name={item.name}>{item.content}</Tabs.Pane>
				})
			}
			</Tabs>
			</div>
			)
		}
	}

function mapStateToProps(state){
	//注意下面的layoutReducer的用法对吗???
	return {
		hisTabs:state.layoutReducer.hisTabs,
		hisTabIndex:state.layoutReducer.hisTabIndex
	}
}

function mapDispatchToProps(dispatch){
	return {
		onRemoveTab:function(index){
			dispatch({
				type:'REMOVE_TAB',
				index:index
			})
		},
		onAddTab:function(tab,hisTabIndex){
			dispatch({
				type:'ADD_TAB',
				tab,
				hisTabIndex
			})
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(HisTab);

{

}