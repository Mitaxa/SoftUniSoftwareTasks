function footballKit(input) {
    let tShirtPrice = Number(input[0]);
    let discountSum = Number(input[1]);
    let shortsPrice = tShirtPrice * 0.75;
    let socksPrice = 1/5 * shortsPrice;
    let shoesPrice = 2 * (tShirtPrice + shortsPrice);
    let totalCost = tShirtPrice + shoesPrice + shortsPrice +socksPrice;
    let totalBill = totalCost - (15 / 100 * totalCost);
    if (totalCost >= discountSum){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalBill.toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.")
        let neededMoney = discountSum - totalBill;
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`)
    }
}
footballKit(["55", "310"])