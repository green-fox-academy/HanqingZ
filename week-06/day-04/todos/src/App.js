import React from 'react';
//import Todo from './component/todo';
import './App.css';
import DoneLogo from './done.svg';
import DeleteLogo from './remove.svg';

const http = `https://peaceful-bayou-52514.herokuapp.com/api/todos` || `http://localhost:8080/api/todos`;
//let port = 3000

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      serverStatus: 0,
      todo: [],
    }
    this.additem = this.additem.bind(this);
    this.item = '';
  }

  componentDidMount() {
    console.log(this.state);
    this.getTodos();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.todo.toString() !== prevState.todo.toString() 
        || this.state.serverStatus != prevState.serverStatus){
      this.getTodos();
    }
  }

  additem(input){
    this.setState({
      ...this.state,
      serverStatus: 0,
    });
    if(input.length > 3){
      this.postTodos({ text: input, done: false });
    }
  }

  onDeleteItem(idNumber){
    let todos = this.state.todo;
    this.setState({
      ...this.state,
      serverStatus: 0,
    });
    todos.map((element, index) => {
      if(element.id === idNumber){
        this.deleteTodos(idNumber);
      }
    })
  }

  onDoneItem(idNumber){
    let todos = this.state.todo;
    this.setState({
      ...this.state,
      serverStatus: 0,
    });
    todos.map((element) => {
      if(element.id === idNumber){
        this.updateTodos(idNumber, element.done);
      }
    })
  }

//==============================================================
  getTodos() {
    //console.log('connect');
    fetch(http)
    .then(res => res.json())
    .then(data => this.setState({...this.state, todo: data}))
    .catch(err => err);
  }

  postTodos(newTodo) {
    fetch(http, {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => this.setState({...this.state, serverStatus: res.status}));
  }

  deleteTodos(id) {
    fetch(`${http}/${id}`, {
      method: 'DELETE',
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => this.setState({...this.state, serverStatus: res.status}));
  }

  updateTodos(id, newStatus) {
    console.log(newStatus);
    if(newStatus === true){
      newStatus = false;
    }
    else {
      newStatus = true;
    }
    fetch(`${http}/${id}`, {
      method: 'PUT', 
      body: JSON.stringify({ done: newStatus }),
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => this.setState({...this.state, serverStatus: res.status}));
  }

  render(){
    return (
      <div className="App">
        <main className="App-header">
          <header>TODOS</header>
          <div>
            <input type="text" className="input-text" onChange={event => this.item = event.target.value} />
            <button className="button-text" onClick={() => this.additem(this.item)}> Add </button>
          </div>
          <ul className="todolist">
            {this.state.todo.map((ele,index) => 
              <li key={ index } className={(ele.done === true) ? "todo-item-done" : "todo-item-undone"}>
                {ele.text}
                <div className="icon">
                  <img src={ DeleteLogo } alt= { DeleteLogo } className="deleteitem" onClick={() => {this.onDeleteItem(ele.id)}} />
                  <img src={ DoneLogo } alt= { DoneLogo } className="doneitem" onClick={() => {this.onDoneItem(ele.id)}} />
                </div>
              </li>
            )}
          </ul>
        </main>
      </div>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return(
//       <div className="App">
//         <Todo />
//       </div>
//     )
//   }
// }
