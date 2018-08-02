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
import './notice.less';
import {
	Input,
	Button,
	Table,
	Pagination,
	Loading
} from 'element-react'


class Notice extends Component {
	constructor() {
		super();
		this.state = {
			searchData:{

			},
			columns: [{
				label: "日期",
				prop: "date",
				width: 180
			}, {
				label: "姓名",
				prop: "name",
				width: 180
			}, {
				label: "地址",
				prop: "address"
			}],
			data: [],
			page:1,
			pageSize:10,
			loading:false
		}
	}
	componentWillMount() {
		this.getList();
	}
	getList() {
		this.setState({
			loading: true
		})
		$.ajax({
				url: 'http://localhost:3001/notice-list',
				data: {
					...this.state.searchData,
					page: this.state.page,
					pageSize: this.state.pageSize
				},
				dataType: 'json',
			})
			.done((data) => {
				if (1 == data.status) {
					this.setState({
						data: data.data
					})
					this.setState({
						loading: false
					})
				}
			})
	}
	handleSearch(val){
		
		this.setState({
			searchData:{
				...this.searchData,
				content:val
			}
		})
	}
	search(){
		
		this.getList();
	}
	reset(){
		this.setState({
			page:1,
			searchData:{}
		})
		setTimeout(()=>{this.getList()});

	}
	pageChange(page){
		this.setState({
			page:page
		})
		setTimeout(()=>{this.getList()});
	}
	pageSizeChange(pageSize) {
		this.setState({
			pageSize: pageSize,
			page:1
		})
		setTimeout(() => {
			this.getList()
		});
	}
	render() {
		var pageList = this.props.pageList;
		return (
			<div className="notice-page"> 
			<div className="page-title">公告通知</div>
			<div className="top-search-wrap">
			<div className="search-part">公告信息<Input placeholder="请输入内容" onChange={this.handleSearch.bind(this)} value={this.state.searchData.content} /></div>
			<div className="search-part">公告类型<Input placeholder="请输入内容" /></div>
			<div className="search-part">发布日期<Input placeholder="请输入内容" /></div>
			<Button type="primary" onClick={this.search.bind(this)}>查询</Button>
			<Button onClick={this.reset.bind(this)}>重置</Button>
			</div>
			<Loading loading={this.state.loading}>
			<Table
			style={{
				width: '100%'
			}}
			className="mt20"
			columns={this.state.columns}
			maxHeight={200}
			data={this.state.data}
			/>
			</Loading>
            <Pagination className="mt20" onSizeChange={this.pageSizeChange.bind(this)} onCurrentChange={this.pageChange.bind(this)}   layout="total, sizes, prev, pager, next, jumper" total={400} pageSizes={[10, 20, 50, 100]} pageSize={this.state.pageSize} currentPage={this.state.page}/>

			</div>
		)
	}
}



export default Notice;