'use strict'

export class Node {
  value: string;
  right: Node;
  left: Node;

  constructor(value) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }
}