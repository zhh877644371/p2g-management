import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button, Modal, Input, message, Tag } from 'antd';
import style from './Nav.css';
import qs from 'qs';
import axios from 'axios';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginVisible: false,
            loading: false,
            isLogin: false,
            accountName: '',
            token: '',
        };
        this.showLoginModal = this.showLoginModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLoginCan = this.handleLoginCan.bind(this);
    }
    componentDidMount() {
        if (window.sessionStorage.getItem('accountName')) {
            this.setState({
                accountName: window.sessionStorage.getItem('accountName'),
                isLogin: true,
            });
        }
    }
    showLoginModal() {
        this.setState({
            loginVisible: true,
        });
    }
    handleLogin() {
        //console.log(document.getElementsByClassName("input-param")[0].value);
        var this1 = this;
        if (document.getElementsByClassName("input-param")[0].value === '' || document.getElementsByClassName("input-param")[1].value === '') {
            message.info("用户名或密码为空！");
        }
        else {
            axios.post('v1/admin/login', qs.stringify({
                accountName: document.getElementsByClassName("input-param")[0].value,
                password: document.getElementsByClassName("input-param")[1].value,
            })).then(function (response) {
                if (response.data.code === 0) {
                    console.log('1', response.data);
                    message.success("登录成功！");
                    window.sessionStorage.setItem('accountName', document.getElementsByClassName("input-param")[0].value);//利用session储存用户名
                    window.sessionStorage.setItem("token", response.data.data.token);//利用session储存token
                    window.location.href = window.location.origin;
                    this1.setState({
                        loginVisible: false,
                    })
                    console.log('111', response.data.data.token);
                }
                else if (response.data.code === 9003) {
                    message.warning("账户不存在！");
                }
                else if (response.data.code === 9006) {
                    message.error("密码错误！");
                }
                else if (response.data.code === 9007) {
                    message.warning("错误次数超过限制！");
                }
                else {
                    message.warning("该账户处于锁定状态！");
                }
            }).catch(function (err) {
                console.log(err);
                console.log('222');
            });
        }
    }
    handleLoginCan() {
        this.setState({
            loginVisible: false,
        });
    }
    handleClick() {
        window.sessionStorage.removeItem('accountName');
        window.sessionStorage.removeItem('token');
        window.location.href = window.location.origin;
    }

    render() {
        // const {children} = this.props;
        return (
            <div>
                <header className={style.header}>
                    <Link to="/">P2G管理端系统</Link>
                    {this.state.isLogin ?
                        <span className={style.text}>
                            <Tag>Hello,{window.sessionStorage.getItem('accountName')}</Tag>
                            <Button type="primary" onClick={this.handleClick}>注销</Button>
                        </span>
                        :
                        <span className={style.text}>
                            <Button type="primary" onClick={this.showLoginModal}>登录</Button>
                        </span>}
                    <Modal title="登录" visible={this.state.loginVisible} onOk={this.handleLogin} onCancel={this.handleLoginCan} okText="登录" cancelText="取消">
                        <div className="userInfo"><label> 账户名:</label> <Input className="input-param" /></div>
                        <div className="userInfo"><label> 密码：</label> <Input className="input-param" type="password" /></div>
                    </Modal>
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
                                <Menu.Item key="test">
                                    <Link to="/test">test</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="adminManage" title={<span><Icon type="team" /><span>管理员账户管理</span></span>}>
                                <Menu.Item key="admin-list">
                                    <Link to="/adminList">管理员用户列表</Link>
                                </Menu.Item>
                                <Menu.Item key="admin-add">
                                    <Link to="/adminAdd">新建管理员账户</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="govManage" title={<span><Icon type="solution" /><span>政府账户管理</span></span>}>
                                <Menu.Item key="gov-list">
                                    <Link to="/govList">政府账户列表</Link>
                                </Menu.Item>
                                <Menu.Item key="gov-add">
                                    <Link to="/govAdd">新建政府账户</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="userManage" title={<span><Icon type="user" /><span>投资用户管理</span></span>}>
                                <Menu.Item key="user-list">
                                    <Link to="/userList">用户列表</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="projectManage" title={<span><Icon type="cloud" /><span>融资项目管理</span></span>}>
                                <Menu.Item key="gov-information">
                                    <Link to="/govInformation">政府信息</Link>
                                </Menu.Item>
                                <Menu.Item key="project-check">
                                    <Link to="/projectCheck">项目审核</Link>
                                </Menu.Item>
                                <Menu.Item key="product-check">
                                    <Link to="/productCheck">产品审核</Link>
                                </Menu.Item>
                                <Menu.Item key="release-manage">
                                    <Link to="/releaseManage">发布管理</Link>
                                </Menu.Item>
                                <Menu.Item key="overdue-manage">
                                    <Link to="/overdueManage">逾期管理</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="newsManage" title={<span><Icon type="message" /><span>新闻管理</span></span>}>
                                <Menu.Item key="news-list">
                                    <Link to="/newsList">新闻列表</Link>
                                </Menu.Item>
                                <Menu.Item key="news-add">
                                    <Link to="/newsAdd">新建新闻</Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="sysNoticeManage" title={<span><Icon type="bell" /><span>系统公告管理</span></span>}>
                                <Menu.Item key="sys-notice-list">
                                    <Link to="/sysNoticeList">系统公告列表</Link>
                                </Menu.Item>
                                <Menu.Item key="sys-notice-add">
                                    <Link to="/sysNoticeAdd">新建系统公告</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </main>
            </div>
        )
    }
}