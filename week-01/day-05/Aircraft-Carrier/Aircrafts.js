class Aircraft {
    constructor(type, maxAmmo, baseDamage, isPriority) {
        this.type = type;
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
        this.isPriority = isPriority;
        //this.remain = this.maxAmmo;
    }

    fight(){
        return (this.maxAmmo * this.baseDamage);
    }

    refill(numberOfAmmo){
        if(numberOfAmmo < (this.maxAmmo - this.remain)){
            this.remain += numberOfAmmo;
            return 0;
        }
        else{
            let remainOfTotalAmmo = numberOfAmmo - this.remain;
            this.remain = this.maxAmmo;
            return remainOfTotalAmmo;
        }
    }

    get getType(){
        return this.type;
    }

    getStatus(){
        console.log(`Type ${this.type}, Ammo: ${this.maxAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.fight()}`)
    }

    get isPrioritys(){
        return this.isPriority;
    }
}

class F16 extends Aircraft {
    constructor(){
        super('F16', 8, 30, false);
    }

}

class F35 extends Aircraft {
    constructor(){
        super('F35', 12, 50, true);
    }

}

module.exports = { F16, F35 };