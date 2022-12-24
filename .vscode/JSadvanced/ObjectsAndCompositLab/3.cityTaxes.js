function createRecord(name, population, treasury){
    return {
        name, population, treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },
    };
}
createRecord()
console.log(createRecord('Tortuga', 7000, 15000))
console.log(createRecord('Santo Domingo', 12000, 23500))