import React, {Component} from 'react';
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Left extends Component {
    render() {
        return (
            <div className="left">

                <Menu defaultActive="2-1" className="el-menu-vertical-demo" mode="inline">

                    <Menu.Item index="2-8">
                        <Link to="/home">首页</Link>
                    </Menu.Item>

                    <SubMenu
                        index="2"
                        title={< span > <i className="el-icon-message"></i>个人中心 < /span>}>

                        <Menu.Item index="2-7">
                            <Link to="/1">page1</Link>
                        </Menu.Item>

                        <Menu.Item index="2-8">
                            <Link to="/2">page2</Link>
                        </Menu.Item>

                        <Menu.Item index="2-1">
                            <Link to="/uinfo">个人信息</Link>
                        </Menu.Item>

                        <Menu.Item index="2-2">消息中心</Menu.Item>

                        <Menu.Item index="2-3">
                            <Link to="/notice">公告通知</Link>
                        </Menu.Item>

                    </SubMenu>

                </Menu>
            </div>
        )
    }
}

export default Left;