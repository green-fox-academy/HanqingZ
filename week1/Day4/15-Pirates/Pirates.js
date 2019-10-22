class Pirates {
  constructor(){
    this.consumRum = 0;
    this.status = 'alive';
  }

  drinkSomeRum() {
    this.consumRum++;
  }

  howsItGoingMate() {
    if(consumRum < 5){
      console.log('Pour me anudder!');
    }
    else{
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      this.status = 'passed out';
    }
  }

  
}

module.exports = Pirates;