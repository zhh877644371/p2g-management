import React, { Component } from 'react'
import { Table, Icon, Divider, Button, Modal, Input, message, Tag } from 'antd'
import Admin from './admin'
import 'antd/dist/antd.css'
import axios from 'axios'

export default class adminList extends Component {
  constructor(props) {
    super(props)
    this.handleModify = this.handleModify.bind(this)
    this.handleModifyCancel = this.handleModifyCancel.bind(this)
    this.item = {}
    this.state = {
      adminAccount: [],
      modifyVisible: false
    }

    this.columns = [
      {
        title: '用户名',
        dataIndex: 'accountName',
        key: 'accountName'
      },
      {
        title: '使用者',
        dataIndex: 'userName',
        key: 'userName'
      },
      {
        title: '联系方式',
        dataIndex: 'userContact',
        key: 'userContact'
      },
      {
        title: '角色码',
        dataIndex: 'role.code',
        key: 'roleCode'
      },
      {
        title: '角色名',
        dataIndex: 'role.name',
        key: 'roleName'
      },
      {
        title: '权限',
        dataIndex: 'role.resources',
        key: 'resources',
        render: (text, record) => {
          return text.map(item => item.name).join('，')
        }
      },
      {
        title: '操作',
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
      url: '/v1/admin/list?token=' + window.localStorage.getItem('token')
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
        <Table columns={this.columns} dataSource={this.state.adminAccount} />
        <Admin
          visible={this.state.modifyVisible}
          handleModifyCancel={this.handleModifyCancel}
          data={this.item}
        />
      </div>
    )
  }
}
