import React, { Component } from 'react'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from 'antd'
import { resources } from '../../constant'
import { Link } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'

const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group

function onChange(checkedValues) {
  console.log('checked = ', checkedValues)
}

class AdminAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accountName: '',
      password: '',
      roleCode: null,
      roleName: '',
      userContact: '',
      userName: '',
      resources: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {
          accountName,
          password,
          roleCode,
          roleName,
          userContact,
          userName,
          resources
        } = values

        this.setState({
          accountName: accountName,
            password: password,
            roleCode: roleCode,
            roleName: roleName,
            userContact: userContact,
            userName: userName,
            resources: resources
        })

        console.log(values)
        const token = window.localStorage.getItem('token')

        axios({
          url: '/v1/admin?token=' + token,
          method: 'post',
          data: qs.stringify({
            token: token,
            accountName: accountName,
            password: password,
            roleCode: roleCode,
            roleName: roleName,
            userContact: userContact,
            userName: userName
            // resources: resources
          }),
          headers: {
            'Content-Type': 'application/json'
          }
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
      }
    })
  }
  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }

    const style = {
      width: '50%',
      margin: '2rem auto 0 auto'
    }
    return (
      <Form onSubmit={this.handleSubmit} style={style}>
        <FormItem {...formItemLayout} label="用户名">
          {getFieldDecorator('accountName', {
            rules: [
              {
                type: 'string',
                message: '不合法的用户名！'
              },
              {
                required: true,
                message: '缺少必须的信息'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="密码">
          {getFieldDecorator('password', {
            rules: [
              {
                type: 'string'
              },
              {
                required: true,
                message: '缺少必须的信息'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="使用者姓名">
          {getFieldDecorator('userName', {
            rules: [
              {
                type: 'string'
              },
              {
                required: true,
                message: '缺少必须的信息'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="使用者联系方式">
          {getFieldDecorator('userContact', {
            rules: [
              {
                type: 'string'
              },
              {
                required: true,
                message: '缺少必须的信息'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="用户角色码">
          {getFieldDecorator('roleCode', {
            rules: [
              {
                pattern: /\d+/,
                message: '角色码必须为数字！'
              },
              {
                required: true,
                message: '缺少必须的信息'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="用户角色名">
          {getFieldDecorator('roleName', {
            rules: [
              {
                type: 'string'
              },
              {
                required: true,
                message: '缺少必须的信息'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="用户权限">
          {getFieldDecorator('resources', {
            rules: [
              {
                required: true,
                message: '必须至少选择一项权限'
              }
            ]
          })(<CheckboxGroup options={resources} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(AdminAdd)
