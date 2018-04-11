import React, { Component } from "react";
import { Table, Icon, Divider } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { accountStatus } from "../../constant";

const columns = [
    {
        title: "账号",
        dataIndex: "account.accountName",
        key: "accountName"
    },
    {
        title: "姓名",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "总投资金额",
        dataIndex: "totalInvestment",
        key: "totalInvestment"
    },
    {
        title: "投资产品数量",
        dataIndex: "investmentCount",
        key: "investmentCount"
    },
    {
        title: "联系方式",
        dataIndex: "account.mobile",
        key: "mobile"
    },
    {
        title: "注册日期",
        dataIndex: "registerDate",
        key: "registerDate"
    },
    {
        title: "上次登录日期",
        dataIndex: "lastLoginDate",
        key: "lastLoginDate"
    },
    {
        title: "最近成交日期",
        dataIndex: "lastOrderDate",
        key: "lastOrderDate"
    },
    {
        title: "账户状态",
        dataIndex: "account.status",
        key: "status",
        render(text, record, index) {
            return accountStatus[text];
        }
    }
];

export default class userList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAccount: []
        };
    }
    componentDidMount() {
        var self = this;
        axios({
            method: "get",
            url:
                "/v1/inv_basic/list?token=d86d5e59fcd318ff0760cb08a1dffc5002fffff20ab8c2c35198fdc947f4321071e182ef591b0cce316b4ad0526f48578eb775e49acf3f46dcc222cd1027a4360d4f23f91e43792d11caa7d5eaf6b663943518151804aaf5132646b548905566"
        })
            .then(function(response) {
                console.log("成功!!!", response);
                if (response.status == 200) {
                    self.setState({
                        userAccount: response.data.data
                    });
                }
            })
            .catch(function(err) {});
    }

    render() {
        console.log(this.state.userAccount);
        return (
            <div>
                <Table columns={columns} dataSource={this.state.userAccount} />
            </div>
        );
    }
}
