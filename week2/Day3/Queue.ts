'use strict'

import { Node } from './Node';
import { Stack } from './Stack';

interface Queue_interface {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

export class Queue implements Queue_interface {
  private queues : string[];
  
  constructor() {
    this.queues = [];
  }

  empty() {
    if(this.queues.length == 0){
      return true;
    }
    return false;
  }

  peek() {
    if(this.queues == []){
      return 'Empty Queue';
    }
    return this.queues[0];
  }

  add(value: string) {
    this.queues.push(value);
  }

  remove() {
    return this.queues.shift();
  }
}

let queues = new Queue();
console.log(queues.empty());

queues.add('hello');
queues.add('world');
queues.add('thank');

console.log(queues);
console.log(queues.peek());

queues.add('you');
console.log(queues);

console.log(queues.remove());
console.log(queues);