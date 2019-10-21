'use strict'

//import { Bird } from '../02-Zoo/Animal';
import { Flyable } from './Flyable';

//copy from previous exercise Animal
abstract class Animal {
  protected name: string;
  protected age: number;

  getName(): string {
    return this.name;
  }

  abstract breed();
}

//redo Bird class, implemented from interface Flyable and abstract class Animal
export class Bird extends Animal implements Flyable {
  constructor(name: string) {
    super();
    this.name = name;
  }

  breed(): string {
    return 'laying eggs';
  }

  land(){
    console.log('land on ground');
  }

  fly(){
    console.log('fly in sky');
  }

  takeOff(){
    console.log('take off');
  }
}