'use strict'

export class Node {
  value: string;
  next: Node;
  left: Node;
  right: any;

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  getValue(): string {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  getNext(): Node {
    return this.next;
  }

  setNext(node: Node) {
    this.next = node;
  }

  // removeNode() {
  //   this.value = '';
  //   setTimeout(() => {
  //     this.next = null;
  //   }, 10);
  //   return this.next;
  // }
}