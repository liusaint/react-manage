
import React, { Component } from 'react';
import {Link} from 'react-router';
import {Menu} from 'element-react';

class Left extends Component{
	render(){
		return (<div className="left">

			<Menu defaultActive="2-1" className="el-menu-vertical-demo"  >
			<Link to="/home"><Menu.Item index="1"><i className="el-icon-setting"></i>首页</Menu.Item></Link>

				<Menu.SubMenu index="2" title={<span><i className="el-icon-message"></i>个人中心</span>}>

				<Link to="/1"><Menu.Item index="2-7">page1</Menu.Item></Link> 
				<Link to="/2"><Menu.Item index="2-8">page2</Menu.Item></Link>
				<Menu.Item index="2-1">个人信息</Menu.Item>
				<Menu.Item index="2-2">消息中心</Menu.Item>
				<Menu.Item index="2-3">公告通知</Menu.Item>
				<Menu.Item index="2-4">个人考勤</Menu.Item>
				<Menu.Item index="2-5">日程安排</Menu.Item>
				<Menu.Item index="2-6">待办事项</Menu.Item>
	
				</Menu.SubMenu>


				<Menu.SubMenu index="3" title={<span><i className="el-icon-menu"></i>行政办公</span>}>

				<Menu.Item index="3-1">考勤管理</Menu.Item>
				<Menu.Item index="3-2">公告管理</Menu.Item>
				<Menu.Item index="3-3">通讯录</Menu.Item>
				<Menu.Item index="3-4">车辆管理</Menu.Item>
				<Menu.Item index="3-5">会议管理</Menu.Item>
				<Menu.Item index="3-6">印章管理</Menu.Item>
				<Menu.Item index="3-7">申请管理</Menu.Item>
	
	
				</Menu.SubMenu>


			</Menu>
			</div>)
	}
}

export default Left;