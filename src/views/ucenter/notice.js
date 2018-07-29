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
	Pagination
} from 'element-react'


class Notice extends Component {
	constructor() {
		super();
		this.state = {
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
			data: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}, {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}]
		}
	}
	componentWillMount() {}
	render() {
		var pageList = this.props.pageList;
		return (
			<div> 
			<div className="page-title">公告通知</div>
			<div className="top-search-wrap">
			公告信息<Input placeholder="请输入内容" />
			公告类型<Input placeholder="请输入内容" />
			发布日期<Input placeholder="请输入内容" />
			<Button type="primary">查询</Button>
			<Button>重置</Button>
			</div>
			<Table
      style={{
        width: '100%'
      }}
      columns={this.state.columns}
      maxHeight={200}
      data={this.state.data}
      />
			<Pagination layout="prev, pager, next" total={50}/>
			</div>
		)
	}
}



export default Notice;