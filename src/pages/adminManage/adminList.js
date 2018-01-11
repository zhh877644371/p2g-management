import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

const columns = [{
    title: '用户名',
    dataIndex: 'accountName',
    key: 'accountName',
}, {
    title: '使用者',
    dataIndex: 'userName',
    key: 'userName',
}, {
    title: '联系方式',
    dataIndex: 'userContact',
    key: 'userContact',
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="#">管理</a>
        </span>
    ),
}];


export default class adminList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            govAccount: [],
        };
    }
    componentDidMount() {
        var self = this;
        axios({
            method: 'get',
            url: '/v1/admin/list?token=d86d5e59fcd318ff0760cb08a1dffc5002fffff20ab8c2c35198fdc947f4321071e182ef591b0cce316b4ad0526f48578eb775e49acf3f46dcc222cd1027a4360d4f23f91e43792d11caa7d5eaf6b663943518151804aaf5132646b548905566',
        }).then(function (response) {
            console.log('成功!!!', response);
            if (response.status == 200) {
                self.setState({
                    govAccount: response.data.data,
                });
            }
        }).catch(function (err) {

        });
    }


    render() {
        console.log(this.state.govAccount);
        return (
            <div>
                <Table columns={columns} dataSource={this.state.govAccount} />
            </div>
        )
    }

}