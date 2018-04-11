import React, { Component } from 'react'
import { Modal, Button, Input, Checkbox } from 'antd'
import axios from 'axios'
import { resources } from '../../constant'

const CheckboxGroup = Checkbox.Group

export default class Admin extends Component {
  constructor(props) {
    super(props)
    
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  onSubmit(e) {
    const nodeList = document.querySelectorAll('.data .input-param')
    const data = Array.from(nodeList).map(item => item.value)

    axios
      .put('v1/admin/account/', {
        token: window.localStorage.getItem('token'),
        accountName: data[0],
        userName: data[1],
        userContact: data[2],
        password: data[3],
        password: data[4],
        roleCode: data[5],
        roleName: data[6],
        id: data[7],
        resources: []
      })
      .then(function(response) {
        const { code } = response.data
        console.log(code)
        if (code === 0) {
          message.success('提交成功')
        } else if (code === 9012) {
          message.warning('用户名不符合规则')
        }
        // } else if (code === 9012) {
        // 	message.warning('用户名不符合规则');
        // }
        // } else if (code === 9012) {
        // 	message.warning('用户名不符合规则');
        // }
        // } else if (code === 9012) {
        // 	message.warning('用户名不符合规则');
        // }
      })
      .catch(function(err) {
        console.log(err)
      })

    this.props.handleModifyCancel()
  }
  onCancel() {
    this.props.handleModifyCancel()
  }
  render() {
    const {
      accountName,
      userName,
      userContact,
      role,
      password,
      id
    } = this.props.data
    const { code, name } = role || {}
    return (
      <Modal
        title="修改管理员信息"
        visible={this.props.visible}
        onOk={this.onSubmit}
        onCancel={this.onCancel}
        okText="提交"
        cancelText="取消"
      >
        <div className="data">
          <label> 用户名：</label>
          <Input className="input-param" value={accountName} readOnly/>
        </div>
        <div className="data">
          <label> 使用者：</label>
          <Input className="input-param" defaultValue={userName} />
        </div>
        <div className="data">
          <label> 联系方式：</label>
          <Input className="input-param" defaultValue={userContact} />
        </div>
        <div className="data">
          <label> 密码：</label>
          <Input className="input-param" />
        </div>
        <div className="data">
          <label> 角色码：</label>
          <Input className="input-param" defaultValue={code} />
        </div>
        <div className="data">
          <label> 角色名：</label>
          <Input className="input-param" defaultValue={name} />
        </div>
        <div className="data">
          <label> 权限：</label>
          <CheckboxGroup options={resources} />
        </div>
        <div className="data">
          <Input className="input-param" defaultValue={id} type='hidden'/>
        </div>
      </Modal>
    )
  }
}
