import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="#">Delete</a>
        <Divider type="vertical" />
        <a href="#" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];

export default class DataPicker extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    //     // const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
    // }

    // // onChange(date, dateString) {
    // //     console.log(date, dateString);
    // // }

    render() {
        return (
            <div>
                {/* Hello,React! */}
                {/* <DatePicker onChange={onChange} />
                <br />
                <MonthPicker onChange={onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={onChange} />
                <br />
                <WeekPicker onChange={onChange} placeholder="Select week" /> */}
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}