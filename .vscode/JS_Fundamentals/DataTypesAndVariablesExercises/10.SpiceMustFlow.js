function spiceMustFlow(startingYield){
    let totalSpice = 0;
    let totalWorkingDays = 0;
    while (startingYield >= 100) {
        totalSpice += startingYield;
        totalWorkingDays += 1;
        startingYield -= 10;
        if (totalSpice >= 26){
            totalSpice -= 26;
        }
        
        }
        if (totalSpice >= 26){
            totalSpice -= 26;
        }
    console.log(totalWorkingDays);
    console.log(totalSpice);
}
spiceMustFlow(111)
spiceMustFlow(450)