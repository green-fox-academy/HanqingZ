'use strict'

import { Node } from './Node';
import { stack_interface } from './Stack_interface';

export class Stack_Node implements stack_interface {
  private heap : Node;

  constructor(){
    this.heap = null;
  }

  empty() {
    if(this.heap){
      return false;
    }
    return true;
  }

  peek() {
    if(!this.heap){
      return null;
    }
    return this.heap.value;
  }

  push(value: string) {
    let curr = new Node(value, this.heap);
    //curr.next = this.heap;
    this.heap = curr;
  }

  pop() {
    if(!this.heap){
      return null;
    }
    let curr = this.heap;
    this.heap = this.heap.next;
    return curr.value;
  }
}

let stack = new Stack_Node()
console.log(stack.pop())
console.log(stack.peek())

for (let i = 0; i < 5; i++) {
  stack.push(i.toString())
}
console.log('==================');
console.log(stack);
console.log(stack.peek());
console.log(stack.pop())
console.log(stack.peek())

console.log('==================');
for (let j = 0; j < 10; j++) {
  console.log(stack.pop())
}