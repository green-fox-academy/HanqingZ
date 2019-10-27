//'use strict'

class RecursiveHanoi {

  protected step : number;
  protected numberOfDisks : number;

  constructor(){
    this.step = 0;
  }

  HanoiMovement (n, start, destination, middle) {
    if(n === 1){
      this.step++;
      console.log(`1 ${start} -> ${destination}`);
    }
    else{
      this.HanoiMovement(n-1, start, middle, destination);
      console.log(`${n} ${start} -> ${destination}`);
      this.step++;
      this.HanoiMovement(n-1, middle, destination, start);
    }
  }

  getSteps() {
    return this.step;
  }
}

let hanoise = new RecursiveHanoi();
console.time('Hanoi Tower');
hanoise.HanoiMovement(4, 'A', 'C', 'B');
console.timeEnd('Hanoi Tower');
console.log('Steps: ' + hanoise.getSteps());