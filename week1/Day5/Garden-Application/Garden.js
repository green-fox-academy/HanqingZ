//const Plant = require('./Plant');

class Garden {
    constructor() {
        this.flowers = [];
        this.trees = [];
    }

    addFlower(flower){
        this.flowers.push(flower);
    }

    addTree(tree){
        this.trees.push(tree);
    }

    watering(waterAmount){
        console.log(`Watering with ${waterAmount}`);
        //let needWatering = ;
        let wateringAmountPerPlant = parseInt(waterAmount)/parseInt(this.getNeedWaterFlower() + this.getNeedWaterTree());
        
        this.flowers.map(e => {
            e.watering(wateringAmountPerPlant);
        })

        this.trees.map(e => {
            e.watering(wateringAmountPerPlant);
        })
    }

    getNeedWaterFlower(){
        let needWaterFlower = 0;
        this.flowers.forEach(e =>{
            if(e.status == 'needs water'){
                needWaterFlower++;
            }
        })
        return needWaterFlower;
    }

    getNeedWaterTree(){
        let needWaterTree = 0;
        this.trees.forEach(e =>{
            if(e.status == 'needs water'){
                needWaterTree++;
            }
        })
        return needWaterTree;
    }
}

module.exports = Garden;