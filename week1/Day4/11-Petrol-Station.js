class Car {
    constructor(gasAmount = 0, capacity = 100){
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }

    fillGasToFull(){
        this.gasAmount = this.capacity;
    }
}

class Station {
    constructor(gasAmount = 10000){
        this.gasAmount = gasAmount;
    }

    refill(car){
        let temp = car.capacity - car.gasAmount;
        this.gasAmount -= temp;
        car.fillGasToFull();
    }
}

let car = new Car(50, 100);
let station = new Station();

station.refill(car);
console.log(car);
console.log(station);