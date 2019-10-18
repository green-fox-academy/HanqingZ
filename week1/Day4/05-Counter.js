// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    constructor(number = 0){
        this.number = parseInt(number);
        this.initValue = parseInt(number);
    }
    add(number){
        this.number += parseInt(number);
    }
    addOne(){
        this.number++;
    }
    get(){
        return this.number;
    }
    reset(){
        this.number = this.initValue;
    }
}

let test = new Counter(10);
test.add(3);
console.log(test.get());
test.addOne();
console.log(test.get());