class Plant {
    constructor(color, waterAmount = 0){
        this.color = color;
        this.waterAmount = waterAmount;
        //this.status = status;
        //this.type = type;
    }
    watering(wateringAmount){
    }
}

class Flower extends Plant{
    constructor(color, waterAmount = 0){
        super(color, waterAmount = 0)
        this.type = 'Flower';
        this.status = this.waterAmount >= 5 ? 'doesn\'t need water' : 'needs water';
    }
    
    print(){
        console.log(`The ${this.color} ${this.type} ${this.status}.`)
    }

    watering(wateringAmount){
        this.waterAmount += (parseInt(wateringAmount) * 0.75);
        this.status = this.waterAmount >= 5 ? 'doesn\'t need water' : 'needs water';
        this.print();
    }    
}

class Tree extends Plant {
    constructor(color, waterAmount = 0){
        super(color, waterAmount)
        this.type = 'Tree';
        this.status = this.waterAmount >= 10 ? 'doesn\'t need water' : 'needs water';
    }

    print(){
        console.log(`The ${this.color} ${this.type} ${this.status}.`)
    }

    watering(wateringAmount){
        this.waterAmount += (parseInt(wateringAmount) * 0.4);
        this.status = this.waterAmount >= 10 ? 'doesn\'t need water' : 'needs water'
        this.print();
    }
}

module.exports = { Flower, Tree };