'use strict'

import { Reservationy } from './Reservationy';

//DOW list store all the day of one week
const DOW = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

class Reservation implements Reservationy {
  private code: string;
  private dow: string;

  constructor(){
    this.code = this.getCodeBooking();
    this.dow = this.getDowBooking();
  }

  //get reserved weekday from DOW List
  getDowBooking(): any {
    var randomIndex = Math.floor(Math.random() * 7);
    return this.dow = DOW[randomIndex];
  }

  //get reservation code with random number
  getCodeBooking(): string {
    let randomCode = '', randomNum;
    for(let i = 0; i < 8; i++){
      randomNum = 0;

      //randomly pickup a number to transfer to char through ASCII table
      //since the number is out of the given range, repick one
      while(randomNum < 48 || randomNum > 90 || (randomNum > 57 && randomNum < 65)){ 
        randomNum = Math.floor(Math.random() * 43 + 48);
      }
      randomCode += String.fromCharCode(randomNum);
    }
    return this.code = randomCode;
  }

  //print the booking
  print(){
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}


//create reservation list
let reservationList: Reservation[];
reservationList = [];

//add new reservation to the list
for(let c = 0; c < 8; c++){
  let reservation = new Reservation();
  reservationList.push(reservation);
}

//print out all the reservation from the list
reservationList.forEach(element => {
  element.print();
});