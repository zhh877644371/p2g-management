import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './Nav.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Nav extends Component {
    handleClick = (e) => {
        console.log('click ', e);
    }
    render() {
        return (
            <div>
                <header>
                    <Link to="/">Hello,react!</Link>
                </header>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="vertical">
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <MenuItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1"><Link to="/page1">Page1</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/counter">Counter</Link></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3"><Link to="/userinfo">UserInfo</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/tabletest">TableTest</Link></Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
            // <ul>
            //     <li><Link to="/">首页</Link></li>
            //     <li><Link to="/page1">Page1</Link></li>
            //     <li><Link to="/counter">Counter</Link></li>
            //     <li><Link to="/userinfo">UserInfo</Link></li>
            //     <li><Link to="/tabletest">TableTest</Link></li>
            // </ul>
        )
    }
}