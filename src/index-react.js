import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of Jesus';
    const options = ['thing one', 'thing two', 'thing four'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/> 
        <Action />
        <Options options={options}/>
        <AddOption />
  </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>     
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
     <div>
       <button>What should I do?</button>
     </div>
    );
  }
}

class Options extends React.Component {
 constructor(props) {
   super(props);
   this.handleRemoveAll = this.handleRemoveAll.bind(this);
 } 
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove all buttons</button>
       {
         this.props.options.map((item) => <Option key={item} optionText={item} />)
       }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Options: {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAdoOption(e) {
    e.preventDefault();

    const option = e.target.option.value.trim();

    if(option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
       <form onSubmit={this.handleAdoOption}>
       <input type="text" name="option"/>
       <button>Add Option</button>
       </form>
      </div>
    )
  }

}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

