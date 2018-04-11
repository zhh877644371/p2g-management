import React, { Component } from 'react'
import { Table, Icon, Divider, Button, Modal, Input, message, Tag } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'

export default class govFinInfoList extends Component {
  constructor(props) {
    super(props)
    this.handleModify = this.handleModify.bind(this)
    this.handleModifyCancel = this.handleModifyCancel.bind(this)
    this.item = {}
    this.state = {
      govList: [],
      modifyVisible: false
    }

    this.columns = [
      {
        title: '用户名',
        dataIndex: 'account.accountName',
        key: 'accountName'
      },
      {
        title: '机构名称',
        dataIndex: 'institution',
        key: 'institution'
      },
      {
        title: '已融资金额（万元）',
        dataIndex: 'officeAddress',
        key: 'officeAddress'
      },
      {
        title: '项目数量',
        dataIndex: 'contact.name',
        key: 'contactName'
      },
      {
        title: '还款进度',
        dataIndex: 'contact.telephone',
        key: 'contactTelephone'
      },
      {
        title: '查看项目详情',
        key: 'action',
        render: (text, record, index) => {
          return (
            <a onClick={this.handleModify} index={index}>
              修改
            </a>
          )
        }
      }
    ]
  }

  componentDidMount() {
    var self = this
    axios({
      method: 'get',
      url: '/v1/gov_basic/list?token=' + window.localStorage.getItem('token')
    })
      .then(function(response) {
        if (response.status == 200) {
          self.setState({
            adminAccount: response.data.data
          })
        }
      })
      .catch(function(err) {})
  }

  handleModify(e) {
    const index = parseInt(e.target.getAttribute('index'))
    this.item = this.state.adminAccount[index]
    this.setState({
      modifyVisible: true
    })
  }
  handleModifyCancel() {
    this.setState({
      modifyVisible: false
    })
  }
  render() {
    return (
      <div>
        <Table columns={this.columns} dataSource={this.state.govList} />
      </div>
    )
  }
}
