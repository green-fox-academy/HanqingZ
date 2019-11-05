import React from 'react';
import data from './data'

export default class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
        { text: 'Feed the monkey', prio: 2 },
        { text: 'Buy milk', prio: 1 }
      ],
      doneTodo: [
        { text: 'Sleep 8 hours', prio: 2 },
        { text: 'Mentoring others', prio: 1 }
      ],
    }

  }

  todoPart() {
    return (
      <>
        {
          this.state.todo.map({element, index})
        }
      </>
    )
  }
  
  donePart() {

  }

  render(){
    return (
      <div>
        
        
      </div>
    );
  }
}