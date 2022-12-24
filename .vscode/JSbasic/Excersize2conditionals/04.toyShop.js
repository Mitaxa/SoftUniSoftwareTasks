function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzelNum = Number(input[1]);
    let speakDollNum = Number(input[2]);
    let teddyBearNum = Number(input[3]);
    let minionNum = Number(input[4]);
    let trucksNum = Number(input[5]);
    let moneyPuzzels = puzzelNum * 2.60;
    let moneySpeakDolls = speakDollNum * 3;
    let moneyTeddyBear = teddyBearNum * 4.10;
    let moneyMinion = minionNum * 8.20;
    let moneyTrucks = trucksNum * 2;
    let totalToysMoney = moneyPuzzels + moneySpeakDolls + moneyTeddyBear + moneyMinion + moneyTrucks;
    let totalToysNum = puzzelNum + speakDollNum + teddyBearNum + minionNum + trucksNum;
    if (totalToysNum >= 50) {
        let discount = totalToysMoney * 0.25;
        totalToysMoney = totalToysMoney - discount;
        let rent = totalToysMoney * 0.1;
        let profit = totalToysMoney - rent;
        if (profit >= excursionPrice) {
            let difference = profit - excursionPrice;
            console.log(`Yes! ${(difference.toFixed(2))} lv left.`);

        } else {
            let difference = excursionPrice - profit;
            console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
        }
    }
}
toyShop(["320", "8", "2", "5", "5", "1"])