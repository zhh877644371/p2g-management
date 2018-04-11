import React, { Component } from 'react'
import { Table, Icon, Divider, Button, Modal, Input, message, Tag } from 'antd'
import { productStatus } from '../../constant'
import 'antd/dist/antd.css'
import axios from 'axios'

export default class ProductCheckList extends Component {
  constructor(props) {
    super(props)
    this.handleModify = this.handleModify.bind(this)
    this.handleModifyCancel = this.handleModifyCancel.bind(this)
    this.item = {}
    this.state = {
      products: [],
      modifyVisible: false
    }

    this.columns = [
      {
        title: '产品名称',
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
        title: '所属项目',
        dataIndex: 'project.name',
        key: 'projectName'
      },
      {
        title: '提交机构',
        dataIndex: 'project.account.accountName',
        key: 'accountName'
      },
      {
        title: '提交日期',
        dataIndex: 'commitDate',
        key: 'commitDate'
      },
      {
        title: '起息日',
        dataIndex: 'valueDate',
        key: 'valueDate'
      },
      {
        title: '年化收益率',
        dataIndex: 'yield',
        key: 'yield'
      },
      {
        title: '计划融资金额（万元）',
        dataIndex: 'expectAmount',
        key: 'expectAmount'
      },
      {
        title: '已融资金额（万元）',
        dataIndex: 'finishedAmount',
        key: 'finishedAmount'
      },
      {
        title: '产品状态',
        key: 'status',
        render: (text, record) => {
          return productStatus[record.status]
        }
      }
    ]
  }

  componentDidMount() {
    var self = this
    axios({
      method: 'get',
      url: '/v1/product/list?token=' + window.localStorage.getItem('token')
    })
      .then(function(response) {
        if (response.status == 200) {
          self.setState({
            products: response.data.data
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
        <Table columns={this.columns} dataSource={this.state.products} />
      </div>
    )
  }
}
