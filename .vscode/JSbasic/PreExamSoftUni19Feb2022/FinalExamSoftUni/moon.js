function moon(input) {
    let moonDistance = 384400;
    let avgSpeed = Number(input[0]);
    let fuelFor100km = Number(input[1]);
    let totalFuel = 2 * (moonDistance / 100) * fuelFor100km;
    let totalTime = Math.ceil(2 * moonDistance / avgSpeed + 3);
    console.log(totalTime);
    console.log(totalFuel);
}
moon(["5000",
"7"])