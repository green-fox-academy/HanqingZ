'use strict'

import { Tree_interface } from './Tree'
import { Node } from '../Node'

export class Tree implements Tree_interface {
  private root: Node;

  constructor(){
    this.root = null;
  }

  empty(){
    return this.root ? false : true;
  }

  add(value: string){
    if(!this.root) {this.root = new Node(value);}
    let curr = this.root;
    while(curr.left || curr.right){
      if(value <= curr.value){
        if(!curr.left.value){
          curr.left = new Node(value);
          break;
        }
        curr = curr.left;
      }
      else if(value > curr.value){
        if(!curr.right.value){
          curr.right = new Node(value);
          break;
        }
        curr = curr.right;
      }
    }
  }

  remove(value: string){
    
  }

  search(value: string){
    
  }
}