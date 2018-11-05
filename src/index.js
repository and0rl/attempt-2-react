import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

class IndecisionApp extends React.Component {
  constructor(props) {
      super(props);
      this.handlePick = this.handlePick.bind(this);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleAddOption2 = this.handleAddOption2.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: props.options
      };
  }
  componentDidMount() {
    try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options) {
        this.setState(() => ({options}));
        }
    } 
    catch(e) {
        //non fare nulla
    }
    
    }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.lenght) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('componentDidUpdate--save data');
  }}

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  handleDeleteOptions() {this.setState(() => ({options:[]}))};  

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }
  
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) =>({
      options: prevState.options.filter((option) =>  optionToRemove !== option)
    }));
  }

  handleAddOption2(option) {
    if(!option) {
        return 'Enter valid value to add item';
    }
        else if(this.state.options.indexOf(option) > -1) {
            return 'thos option already exists';
        }
      
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
    // this.setState((prevState) => {
    //       return {
    //         options: prevState.options.concat(option)
    //       };
    //     }
    //   )
    }

  render() {
    
    const subtitle = 'Put your life in the hands of Jesus';
    
    return (
      <div>
        <Header subtitle={subtitle} /> 
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
          />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}         
          />
        <AddOption handleAddOption2={this.handleAddOption2}/>
  </div>
    );
  }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
        return (
          <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}     
          </div>
        );
      }
Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
         <button
         onClick={props.handlePick}
         disabled={!props.hasOptions}
         >
             What should i do?
         </button>
       </div>
      );
};

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all buttons</button>
        {props.options.length === 0 && <p>Enter an option to get started(empty array)</p>}
         {
           props.options.map((item) => (
             <Option 
              key={item}  
              optionText={item}
              handleDeleteOption={props.handleDeleteOption} 
             />
           ))
         }
        </div>
      );
};


const Option = (props) => {
    return (
      <div>
        Options: {props.optionText}
        <button 
          onClick={(e) => { 
              props.handleDeleteOption(props.optionText);
            }}
        >
          remove
        </button>
      </div>
           );
};

class AddOption extends React.Component {
  constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
          error: undefined
      };
  }
    handleAddOption(e) {
    e.preventDefault();

    const option = e.target.option.value.trim();
    const error = this.props.handleAddOption2(option);
    
    this.setState(() => ({error}));

    if(!error) {
        e.target.elements.option.value = '';
    }

  }
  render() {
    return (
      <div>
       {this.state.error && <p>{this.state.error}</p>}
       <form onSubmit={this.handleAddOption}>
       <input type="text" name="option"/>
       <button>Add Option</button>
       </form>
      </div>
    )
  }

}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

