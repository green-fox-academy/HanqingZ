'use strict'

import { Vehicle } from './Vehicle';
import { Flyable } from './Flyable';

//implemented from interface Flyable and abstract class Vehicle
class Helicopter extends Vehicle implements Flyable{
  constructor(){
    super();
    this.name = 'Helicopter';
    this.type = 'Aircraft';
  }

  //implement all the function from Flyable
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