import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';

const columns = [{
    title: '用户名',
    dataIndex: 'accountName',
    key: 'accountName',
}, {
    title: '使用者',
    dataIndex: 'userName',
    key: 'userName',
}, {
    title: '权限',
    dataIndex: 'resources',
    key: 'resources',
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="#">管理</a>
        </span>
    ),
}];

const data = [{
    key: '1',
    accountName: 'admin1',
    userName: 'John Brown',
    resources: '账户管理'+', '+'融资项目管理',
}, {
    key: '2',
    accountName: 'admin2',
    userName: 'Joe',
    resources: '融资项目管理',
}, {
    key: '3',
    accountName: 'admin3',
    userName: 'Amy',
    resources: '系统公告管理',
}];



export default class adminList extends Component {
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}