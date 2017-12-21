import React, { Component } from 'react';
import { Timeline } from 'antd';
import style from './Home.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                <p className={style.box}>Welcome!</p>
                <div className={style.main}>
                <Timeline pending={<a>See more</a>}>
                    <Timeline.Item>Create a services site 2017-12-20</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2017-12-20</Timeline.Item>
                    <Timeline.Item>Technical testing 2017-12-20</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2017-12-20</Timeline.Item>
                </Timeline>
                </div>
                {/* 当前计数：{this.state.count}<br />
                <button onClick={() => this._handleClick()}>自增</button> */}
            </div>
        )
    }
}