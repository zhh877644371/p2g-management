import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function formatName() {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Longer',
    lastName: 'Lee'
};
const element = (
    <h1>Hello, {formatName()}!

    </h1>
);


function tick() {
    const e2 = (
        <div>
            <h1>Hello! It is {new Date().toLocaleTimeString()}.</h1>
        </div>      
    )
    ReactDOM.render(
        e2,
        document.getElementById('root')
    );
};
setInterval(tick,1000);


// function Wlecom(props) {
//     return <h1>Hello, {props.name}</h1>
// }

// class Welcome extends React.Compoment{
//     render(){
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// const e3 = <Welcome name='Joe'/>;
// ReactDom.render(
//     e3,
//     document.getElementById('r2')
// );