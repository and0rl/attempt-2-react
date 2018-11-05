import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
  }

  renderCounterApp();
};
 
const resetArr = () => {
     app.options = [];
     renderCounterApp();
 }

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}


const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          
          <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
          
          <button onClick={resetArr}>Remove All</button>
          
          <ol>
            {
               app.options.map((ttxt) => <li key={ttxt}>{ttxt}</li> )
            }
          </ol>
      <form onSubmit={onFormSubmit}>
      
      <input type="text" name="option"/>
      <button>Add Option</button>
      </form>
      
        </div>
      );

      ReactDOM.render(template, appRoot);
}

renderCounterApp();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
