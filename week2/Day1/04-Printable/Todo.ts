'use strict';

import { Printable } from './Printable'

//get code from previous exercise Fleet of Thing
class Todo implements Printable {
  protected todo: string;
  protected completed: boolean;

  constructor(str: string){
    this.todo = str;
    this.completed = false;
  }

  complete(): void{
    this.completed = true;
  }

  getComplete(): boolean{
    return this.completed;
  }

  getTodo(): string{
    return this.todo;
  }

  //implemented function from interface Printable
  printAllFields(): void{
    console.log('[' + this.checkmark() + '] ' + this.getTodo());
  }

  checkmark(): string{
    if(this.getComplete() === true){
        return 'x'
    }
    else{
        return ' '
    }
  }
}

//create new todo and todo list
let todos: Todo[];
todos = [];

let todo1 = new Todo('Buy milk');
todo1.complete();
let todo2 = new Todo('Download games');
let todo3 = new Todo('Diablo');

todos.push(todo1);
todos.push(todo2);
todos.push(todo3);

//test the implementation function
for (let todo of todos) {
  todo.printAllFields();
}