import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';

export default class govList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            govAccount: [],
        };
        this.columns = [{
            title: '账户名称',
            dataIndex: 'account.accountName',
            key: 'accountName',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '机构名称',
            dataIndex: 'institution',
            key: 'institution',
        }, {
            title: '办公地点',
            dataIndex: 'officeAddress',
            key: 'officeAddress',
        }, {
            title: '联系人',
            dataIndex: 'contact.name',
            key: 'name',
        }, {
            title: '联系电话',
            dataIndex: 'contact.telephone',
            key: 'telephone',
        }, {
            title: '联系人邮箱',
            dataIndex: 'contact.email',
            key: 'email',
        },
        ];
    }

    componentDidMount() {
        var this1 = this;
        axios({
            method: 'get',
            url: '/v1/gov_basic/list?token=' + window.sessionStorage.getItem('token'),
        }).then(function (response) {
            console.log('111', response);
            if (response.data.code === 0) {
                this1.setState({
                    govAccount: response.data.data,
                });
            }
            else {
                console.log('未能查询到数据！');
            }
        }).catch(function (err) {

        });
    }

    render() {
        return (
            <div>
                <Table columns={this.columns} dataSource={this.state.govAccount} />
            </div>
        );
    }
}
