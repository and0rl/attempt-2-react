import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';




let count = 0;
const addOne = () => {
    count++; 
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
        const templateTwo = (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={addOne}>+1</button>
          <button onClick={minusOne}>-1</button>
          <button onClick={reset}>reset</button>
        </div>
      );

      ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();