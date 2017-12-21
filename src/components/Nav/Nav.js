import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import style from './Nav.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Nav extends Component {
    render() {
        // const {children} = this.props;
        return (
            <div>
                <header className={style.header}>
                    <Link to="/">P2G管理端系统</Link>
                </header>
                <main className={style.main}>
                    <div>
                        <Menu mode="horizontal" theme="light" >
                            <SubMenu key="overview" title={<span><Icon type="pie-chart" /><span>概览</span></span>}>
                                <Menu.Item key="overview1">
                                    <Link to="/page1">Page1</Link>
                                </Menu.Item>
                                <Menu.Item key="overview2">
                                    <Link to="/counter">Counter</Link>
                                </Menu.Item>
                                <Menu.Item key="overview3">
                                    <Link to="/userinfo">UserInfo</Link>
                                </Menu.Item>
                                <Menu.Item key="overview4">
                                    <Link to="/tabletest">TableTest</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="adminManage" title={<span><Icon type="team" /><span>管理员账户管理</span></span>}>
                                <Menu.Item key="admin-list">
                                    管理员账户列表
                                </Menu.Item>
                                <Menu.Item key="admin-add">
                                    新建管理员账户
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="govManage" title={<span><Icon type="solution" /><span>政府账户管理</span></span>}>
                                <Menu.Item key="gov-list">
                                    政府账户列表
                                </Menu.Item>
                                <Menu.Item key="gov-add">
                                    新建政府账户
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="userManage" title={<span><Icon type="user" /><span>投资用户管理</span></span>}>
                                <Menu.Item key="user-list">
                                    用户列表
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="projectManage" title={<span><Icon type="cloud" /><span>融资项目管理</span></span>}>
                                <Menu.Item key="gov-information">
                                    政府信息
                                </Menu.Item>
                                <Menu.Item key="project-check">
                                    项目审核
                                </Menu.Item>
                                <Menu.Item key="product-check">
                                    产品审核
                                </Menu.Item>
                                <Menu.Item key="release-manage">
                                    发布管理
                                </Menu.Item>
                                <Menu.Item key="overdue-manage">
                                    逾期管理
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="newsManage" title={<span><Icon type="message" /><span>新闻管理</span></span>}>
                                <Menu.Item key="news-list">
                                    新闻列表
                                </Menu.Item>
                                <Menu.Item key="news-add">
                                    新建新闻
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="sysNoticeManage" title={<span><Icon type="bell" /><span>系统公告管理</span></span>}>
                                <Menu.Item key="sys-notice-list">
                                    系统公告列表
                                </Menu.Item>
                                <Menu.Item key="sys-notice-add">
                                    新建系统公告
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    {/* <div className={style.content}>
                        {children}
                    </div> */}
                </main>
            </div>
        )
    }
}