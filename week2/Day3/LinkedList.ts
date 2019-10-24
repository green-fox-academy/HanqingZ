'use strict'

import { Node } from './Node';

interface LinkedList_interface {
  add(value: string, index?: number): void;
  get(index: number): string;
  removeItem(value: string): void;
  remove(index: number): string;
  size(): number;
}

export class LinkedList implements LinkedList_interface {
  private heap: Node;

  constructor(){
    this.heap = null;
  }

  add(value: string, index?: number){
    let curr = this.heap;

    try{
      if(!this.heap){
        this.heap = new Node(value);
        throw 'empty node';
      }
      else if(index != undefined){
        if(index > 0){
          //curr = this.heap;
          while(index > 1){
            if(!curr.next){
              break;
            }
            curr = curr.next;
            index--;
          }
          let newNode = new Node(value);
          newNode.setNext(curr.next ? curr.next : null);
          curr.setNext(newNode);
        }
        else{
          let newHeap = new Node(value);
          newHeap.setNext(curr);
          this.heap = newHeap;
          curr = newHeap;
          throw 'index is too small, node added to the front';
        }
      }
      else{
        while(curr.next){
          curr = curr.next;
        }
        let newNode = new Node(value);
        curr.setNext(newNode);
        throw 'index is undefined, node added to the end'
      }
    }

    catch(error){
      console.log(error);
    }
  }

  get(index: number) {
    let curr = this.heap;

    if(!this.heap){
      return null;
    }

    while(index > 1){
      if(curr.next){
        break;
      }
      curr = curr.next;
      index--;
    }
    return curr.value;
  }

  removeItem(value: string){
    let curr = this.heap;

    if(curr.value !== value) {
        if(curr.next && curr.next.value == value) {
          curr.setNext(curr.next.next);
        }
        else {
          curr = curr.next;
        }
      }
      else{
        curr = curr.next;
      }
  }

  remove(index: number) {
    let curr = this.heap;

      if(!this.heap){
        return null;
      }

      else if(index != undefined){
        if(index > 0){
          index = Math.min(index, this.size()-1);
          //let prev = null;
          while(index > 3){
            //prev = curr;
            curr = curr.next;
            index--;
          }
          curr.next = curr.next.next;
        }
        else{
          let currNum = curr.next.value
          curr.setNext(curr.next.next);
          return currNum;
        }
      }
      else{
        while(curr.next.next){
          curr = curr.next;
        }
        let currNum = curr.next.value
        curr.setNext(curr.next.next);
        return currNum;
      }
  }

  size(){
    let curr = this.heap;

    if(!this.heap){
      return 0;
    }

    let size = 1;
    while(curr.next) {
      size++;
      curr = curr.next;
    }
    return size;
  }
}


 let list = new LinkedList();
 console.log(list.size());

 for (let i = 0; i < 5; i++) {
   list.add(i.toString());
 }
 console.log(list.size());
 console.log(list.remove(10));
 list.removeItem('10');
 list.removeItem('3');
 console.log(list.remove(2));
 console.log(list.size());

console.log(list);