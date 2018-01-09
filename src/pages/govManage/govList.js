import React, {Component} from 'react';
import { Table, Icon, Divider } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';

const columns = [{
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
  
//   const data = [{
//     key: '1',
//     account: 'gov123',
//     name: '宁波xxx',
//     address: '江南路xxx',
//     person: '小白',
//     telephone: '0574-11111111',
//     email: 'xxx@xx.xx',
//   }, {
//     key: '2',
//     account: 'gov456',
//     name: '宁波xxx',
//     address: '江南路xxx',
//     person: '小黑',
//     telephone: '0574-22222222',
//     email: 'xxx@xx.xx',
//   }];

export default class govList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            govAccount:[],
        };
    }

    componentDidMount() {
        var this1 = this;
        axios({
            method: 'get',
            url: '/v1/gov_basic/list?token=d86d5e59fcd318ff0760cb08a1dffc5002fffff20ab8c2c35198fdc947f4321071e182ef591b0cce316b4ad0526f48578eb775e49acf3f46dcc222cd1027a4360d4f23f91e43792d11caa7d5eaf6b663943518151804aaf5132646b548905566',
        }).then(function (response) {
            console.log('111', response);
            if (response.status == 200) {
                this1.setState({
                    govAccount: response.data.data,
                });
            }
        }).catch(function (err) {

        });
    }

    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.state.govAccount} />
            </div>
        )
    }
}