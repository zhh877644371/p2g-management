import React, {Component} from 'react';

import style from './Page1.css';

import image from './images/zhejinwang.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className={style.box}>
                this is page1~
                <br/>
                <img src={image}/>
            </div>
        )
    }
}