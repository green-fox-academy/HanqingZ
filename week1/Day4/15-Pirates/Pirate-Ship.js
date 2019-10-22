'use strict'

const Pirates = require('./Pirates');

class ship {
  constructor() {
    this.crews = [];
    this.captain = new Pirates;
  }

  fillShip(pirate){
    if(captain == null){
      captain = pirate;
      break;
    }
    this.crews.push(pirate);
  }

  surviveCrew(){
    let alives = 0;
    this.crews.map((e,i)=>{
      if(crews[i].status == 'alive'){
        alives++;
      }
    })
    return alives;
  }

  printStatus(){
    console.log(`captain ${this.captain.status}
    There is still ${this.surviveCrew()} crews alive.`);
  }

}