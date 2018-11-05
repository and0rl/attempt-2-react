import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class Counter extends React.Component {
    constructor(props) {
       super(props);
       this.handleAddOne = this.handleAddOne.bind(this);
       this.handleMinusOne = this.handleMinusOne.bind(this);
       this.handleReset = this.handleReset.bind(this);
       this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

       this.state = {
           count: 0,
           visible: false
       };
    }
    
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        }
        )
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        }
        )
    }

    handleToggleVisibility() {
       this.setState((prevState) => {
           return {
               visible: !prevState.visible
           };
       }
       )
    }
    render() {
      return (
          <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.handleAddOne}>+1</button>
              <button onClick={this.handleMinusOne}>-1</button>
              <button onClick={this.handleReset}>reset</button>
              
              <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide' : 'Show' }</button>
              {this.state.visible && (
                  <div>
                    <p>Some text here jesus</p>
                  </div>
              )}
          </div>

      );   
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
