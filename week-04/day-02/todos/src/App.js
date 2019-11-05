import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { DoneLogo } from './done.svg';
import { DeleteLogo } from './remove.svg';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
        { title: 'washdish', done: false },
        { title: 'clean', done: false },
        { title: 'laundry', done: false },
      ],
    }
    this.additem = this.additem.bind(this);
    this.item = '';
  }

  additem(input){
    this.setState({
      todo: [... this.state.todo, { title: input, done: false }],
    });
  }

  onDeleteItem(index){
    let todos = this.state.todo;
    todos.splice(index, 1);
    this.setState({todo: todos});
  }

  onDoneItem(index){
    let todos = this.state.todo;
    todos[index].done = true;
    this.setState({todo: todos});
  }

  render(){
    return (
      <div className="App">
        <main className="App-header">
          <h1>TODOS</h1>
          <div>
            <input type="text" onChange={event => this.item = event.target.value} />
            <button onClick={() => this.additem(this.item)}> Add </button>
          </div>
          <ul className="todo-item">
            {this.state.todo.map((ele,index) => 
                <li key={ index } >
                {ele.title}
                <button className="deleteitem" onClick={() => {this.onDeleteItem(index)}}>XXX</button>
                <button className="doneitem" onClick={() => {this.onDoneItem(index)}}>Yes</button>
              </li>
            )}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
