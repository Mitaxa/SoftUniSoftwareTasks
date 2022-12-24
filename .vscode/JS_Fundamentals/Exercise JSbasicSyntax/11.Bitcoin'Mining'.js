function bitcoinMining(input) {
        let oneBicoinPrice = 11949.16;
        let oneGramGoldPrice = 67.51;
        let totalMoney = 0;
        let bitcoinCounter = 0;
        let dayFirstPurchase = false;
        let day = 0;
        let thirdDayCounter = 0;
     
        for (i = 0; i < input.length; i++) {
            thirdDayCounter++;
            let goldPerDay = input[i];
     
            if (thirdDayCounter === 3) {
                totalMoney += (goldPerDay * 0.70) * oneGramGoldPrice;
                thirdDayCounter = 0;
            } else {
                totalMoney += goldPerDay * oneGramGoldPrice;
            }
     
            while (totalMoney >= oneBicoinPrice) {
                bitcoinCounter++;
                totalMoney = totalMoney - oneBicoinPrice;            
            }
     
            if (dayFirstPurchase === false && bitcoinCounter > 0) {
                day = i + 1;
                dayFirstPurchase = true;
            }        
        }
        console.log(`Bought bitcoins: ${bitcoinCounter}`);
        if (day !== 0) {
            console.log(`Day of the first purchased bitcoin: ${day}`);
        }
        console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
    }
    bitcoinMining([100, 200, 300])