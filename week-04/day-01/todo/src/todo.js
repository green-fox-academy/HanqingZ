import React from 'react';

export default class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: props.state.todo,
      doneList: props.state.doneTodo
    }
  }

  

  componentDidMount(){
    window.addEventListener('keyup', this.handleKeyPress.bind(this));
  }

  handleKeyPress(key){
    if(key.keyCode === 38){
      this.handleIncrement();
    }
    else if(key.keyCode === 40){
      this.handleDecrease();
    }
  }

  render(){
    const { numOfAcorn } = this.state;
    return (
      <div>
        <button onClick={this.handleIncrement.bind(this)}>Buy one</button>
        <p>{numOfAcorn}</p>
        <button onClick={this.handleDecrease.bind(this)}>Eat one</button>
        
      </div>
    );
  }
}