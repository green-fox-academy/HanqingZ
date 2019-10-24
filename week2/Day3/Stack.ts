'use strick'

import { Node } from './Node';
import { stack_interface } from './Stack_interface';

export class Stack implements stack_interface {
  protected stacks : string[];

  constructor(){
    this.stacks = [];
  }

  empty() {
    if(this.stacks.length == 0){
      return true;
    }
    return false;
  }

  peek() {
    if(this.stacks == []){
      return 'Empty Queue';
    }
    return this.stacks[0];
  }

  push(value: string) {
    this.stacks.unshift(value);
  }

  pop() {
    return this.stacks.shift();
  }
}

let stacks = new Stack();
console.log(stacks.empty());

stacks.push('hello');
stacks.push('world');
stacks.push('thank');

console.log(stacks);
console.log(stacks.peek());

stacks.push('you');
console.log(stacks);

console.log(stacks.pop());
console.log(stacks);