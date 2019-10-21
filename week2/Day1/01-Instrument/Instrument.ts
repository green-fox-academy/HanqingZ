'use strict';

abstract class Instrument {
  protected name : string;

  abstract play();
}

//abstract class extends from another abstract class Instrument
abstract class StringedInstrument extends Instrument {
  protected numberOfStrings : number;

  abstract sound();
  //complete the function play()
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };
}

//extends from abstract class StringedInstrument and Instrument
export class ElectricGuitar extends StringedInstrument {
  constructor (numberOfStrings = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = numberOfStrings;
  }
//implements the function with its own definition
  sound():string {
    return 'Twang';
  }
}

//extends from abstract class StringedInstrument and Instrument
export class BassGuitar extends StringedInstrument {
  constructor (numberOfStrings = 4) {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = numberOfStrings;
  }
//implements the function with its own definition
  sound():string {
    return 'Duum-duum-duum';
  }
}

//extends from abstract class StringedInstrument and Instrument
export class Violin extends StringedInstrument {
  constructor (numberOfStrings = 4) {
    super();
    this.name = 'Violin';
    this.numberOfStrings = numberOfStrings;
  }
//implements the function with its own definition
  sound():string {
    return 'Screech';
  }
}