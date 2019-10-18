class Carrier {
    constructor(ammoStorage, healthPoint){
        this.aircrafts = [];
        this.aircraftCount = 0;
        this.totalDamage = 0;
        this.ammoStorage = ammoStorage;
        this.hp = healthPoint;
    }

    add(aircraft) {
        this.aircrafts.push(aircraft);
        this.aircraftCount++;
        this.totalDamage += aircraft.baseDamage;
    }

    fill() {
        this.aircrafts.map(e => {
            try{
                if(this.amnoStorage === 0){throw 'empty'}
                if(this.ammoStorage <= 12 && e.isPrioritys){
                    this.amnoStorage = e.refill(this.ammoStorage);
                }
            }
            catch(err){
                console.log('The ammo is totally empty.');
            }
        })
    }

    fight(damage) {
        this.hp -= damage;
        return this.hp;
    }

    getStatus() {
        if(this.hp === 0){
            return 'It\'s dead Jim :(';
        }
        
        console.log(`HP: ${this.hp}, Aircraft count: ${this.aircraftCount}, Ammo Storage: ${this.ammoStorage}, Total damage: ${this.totalDamage} \nAircrafts:`);

        var eachAircraft = this.aircrafts.forEach(e => {
            e.getStatus();
        })
    }
}

module.exports = Carrier;