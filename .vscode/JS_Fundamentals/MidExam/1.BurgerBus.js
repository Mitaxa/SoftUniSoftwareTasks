function burgerBus(arr) {
    let cityCount = Number(arr.shift());
    let totalExpences = 0;
    let totalProfit = 0;

    for (let i = 0; i < cityCount; i++) {
        let cityName = arr.shift();
        let cityEarned = Number(arr.shift());
        let cityExpences = Number(arr.shift());
        if ((i + 1) === 3) { //special event
            cityExpences += 1/2 * cityExpences;
        } 
        if ((i + 1) === 5) {
            cityEarned = 0.9 * cityEarned;
        }
        totalProfit += cityEarned;
        totalExpences += cityExpences;
        console.log(`In ${cityName} Burger Bus earned ${(cityEarned - cityExpences).toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${(totalProfit - totalExpences).toFixed(2)} leva.`);
}
burgerBus(["3",
"Sofia",
"895.67",
"213.50",
"Plovdiv",
"2563.20",
"890.26",
"Burgas",
"2360.55",
"600.00"])
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])