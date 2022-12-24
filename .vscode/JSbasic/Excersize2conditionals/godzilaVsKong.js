function godzilaVsKong(input) {
    let budget = Number(input[0]);
    let decores = 0.1 * budget;
    let stuntsNum = Number(input[1]);
    let stuntClothPrice = Number(input[2]);
    let expencess = 0;
    if (stuntsNum > 150) {
        stuntClothPrice = 0.9 * stuntClothPrice;
        expencess = (stuntClothPrice * stuntsNum) + decores;
        if (expencess > budget) {
            let neededMoney = expencess - budget;
            console.log(`Not enough money!`);
            console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
        } else {
            let leftMoney = budget - expencess;
            console.log("Action!");
            console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
        }
    } else {
        expencess = (stuntClothPrice * stuntsNum) + decores;
        if (expencess > budget) {
            let neededMoney = expencess - budget;
            console.log(`Not enough money!`);
            console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
        } else {
            let leftMoney = budget - expencess;
            console.log("Action!");
            console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
        }
    }
}
godzilaVsKong(["20000", "120", "55.5"])