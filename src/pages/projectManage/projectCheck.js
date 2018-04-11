import React, { Component } from 'react'
import { Table, Icon, Divider, Button, Modal, Input, message, Tag } from 'antd'
import { projectStatus } from '../../constant'
import util from '../../util';
import 'antd/dist/antd.css'
import axios from 'axios'

export default class ProjectCheckList extends Component {
  constructor(props) {
    super(props)
    this.handleModify = this.handleModify.bind(this)
    this.handleModifyCancel = this.handleModifyCancel.bind(this)
    this.item = {}
    this.state = {
      projects: [],
      modifyVisible: false
    }

    this.columns = [
      {
        title: '项目名称',
        key: 'name',
        render: (text, record, index) => {
          return (
            <a onClick={this.handleClick} index={index}>
              {record.name}
            </a>
          )
        }
      },
      {
        title: '提交机构',
        dataIndex: 'account.accountName',
        key: 'accountName'
      },
      {
        title: '提交日期',
        dataIndex: 'commitDate',
        key: 'commitDate',
        render: (text, record) => {
          return util.formatDate('YYYY.MM.DD',new Date(record.commitDate))
        }
      },
      {
        title: '项目状态',
        key: 'status',
        render: (text, record, index) => {
          return projectStatus[record.status]
        }
      }
    ]
  }

  componentDidMount() {
    var self = this
    axios({
      method: 'get',
      url: '/v1/project/list?token=' + window.localStorage.getItem('token')
    })
      .then(function(response) {
        if (response.status == 200) {
          self.setState({
            projects: response.data.data
          })
        }
      })
      .catch(function(err) {})
  }

  handleModify(e) {
    const index = parseInt(e.target.getAttribute('index'))
    this.item = this.state.projects[index]
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
            
        <Table columns={this.columns} dataSource={this.state.projects} />
      </div>
    )
  }
}
