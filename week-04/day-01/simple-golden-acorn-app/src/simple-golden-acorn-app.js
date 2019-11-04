import React from 'react';

export default class SimpleGoldenAcorn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numOfAcorn: 0
    }
  }

  handleIncrement(){
    const { numOfAcorn } = this.state;
    this.setState({
      numOfAcorn: numOfAcorn + 1,
    });
  }

  handleDecrease(){
    const { numOfAcorn } = this.state;
    if(numOfAcorn === 0){
      return;
    }
    this.setState({
      numOfAcorn: 0 ? 0 : numOfAcorn - 1,
    });
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