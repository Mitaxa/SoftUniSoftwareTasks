function basketballEquipment(input) {
    let yearTax = Number(input[0]);
    let basketballShoes = yearTax - (yearTax * 40 / 100);
    let basketballEkip = basketballShoes - (basketballShoes * 20 / 100);
    let basketballBall = 1 / 4 * basketballEkip;
    let basketballAccessories = 1 / 5 * basketballBall;
    let totalExpencess = yearTax + basketballShoes + basketballEkip + basketballBall + basketballAccessories;
    console.log(totalExpencess);
}
basketballEquipment(["550"])