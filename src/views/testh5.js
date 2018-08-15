
import React, { Component } from 'react';
import axios from 'axios';


import {Spin} from 'antd';

//这个库比较特殊，需要这样引入。
var Cookies = require('js-cookie');

//这样是设置axios默认的baseUrl。针对于不同域的请求应该如何处理。
//api的统一管理 
//axios的整体封装后使用。
//这里相当于给所有的url加了一个/proxy就可以要dev-webpack-server的时候识别这一类请求并代理。
// axios.defaults.baseURL = 'http://localhost:3000/proxy';
axios.defaults.baseURL = 'http://localhost:3001';

class Testh5 extends Component{
	constructor () {
		super();
		this.state = {
			isLogin:Cookies.get('islogin')||false,
			userInfo:{},
			isLoading:false
		}
	}

	handleLogin() {
		
		var url = '/login';
		this.setState({
			isLoading:true
		})
		axios({
			url,
			withCredentials: true, //带cookie
		}).then((response) => {
			this.setState({
				isLoading:false
			})
			var data = response.data;
			if (data.status == 1) {
				this.setState({
					isLogin: true
				});
				this.getUserInfo();
			}
		});
	}

	getUserInfo(){
		var url = '/get-user-info';
		this.setState({
			isLoading:true
		})
		axios({
			url,
			withCredentials: true, //带cookie
		}).then((response) => {
			var data = response.data;
			this.setState({
				isLoading:false
			})
			if (data.status == 1) {
				this.setState({
					userInfo: data.data
				});
			} else {
				this.setState({
					isLogin: false
				});
			}
		});
	}
	componentWillMount () {
		
		if(this.state.isLogin == false){
			return;
		}
		this.getUserInfo();
	}
	render(){

var isLogin = this.state.isLogin;
var isLoading = this.state.isLoading;
var userInfo = this.state.userInfo;
console.log(isLoading,1);
console.log(userInfo);
if(!isLogin){
	return (<div>
		<Spin spinning = {isLoading} />
		<a onClick = {this.handleLogin.bind(this)}>未登录，点击登录</a>
		</div>
	)
}
return (
	<div>
		<Spin spinning={isLoading} />
		<ul>
			<li>username:{ userInfo.username} </li>
			<li>age:{ userInfo.age} </li>
			<li>email:{ userInfo.email} </li>
			</ul>
		</div>
)


	}
}

export default Testh5;