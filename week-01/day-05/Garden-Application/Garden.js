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
        let wateringAmountPerPlant = parseInt(waterAmount)/parseInt(this.getNeedWaterPlant());
        
        this.flowers.map(e => {
            e.watering(wateringAmountPerPlant);
        })

        this.trees.map(e => {
            e.watering(wateringAmountPerPlant);
        })
    }

    getNeedWaterPlant(){
        let needWaterPlant = 0;
        this.flowers.forEach(e =>{
            if(e.status == 'needs water'){
                needWaterPlant++;
            }
        })
        this.trees.forEach(e =>{
            if(e.status == 'needs water'){
                needWaterPlant++;
            }
        })
        return needWaterPlant;
    }
}

module.exports = Garden;