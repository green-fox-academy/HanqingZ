import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

/*
// For first component
import FirstComponent from './first-component';
let element = <FirstComponent />;
ReactDOM.render(element, document.getElementById('root'));
*/


// For second component
import SecondComponent from './second-component';
let element = <SecondComponent items={[ 'a', 'b', 'c' ]} />;
ReactDOM.render(element, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// let element = <p>Hello React!</p>;
// alert(element.props.children);