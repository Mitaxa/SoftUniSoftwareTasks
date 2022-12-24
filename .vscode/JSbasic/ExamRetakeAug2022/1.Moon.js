function moon(input) {
    let distance = 2 * 384400;
    let speed = input[0];
    let travelTime = (distance / speed) + 3;
    let totalFuel = (distance / 100) * input[1];
    console.log(Math.ceil(travelTime));
    console.log(totalFuel);
}
moon(["10000",
"5"])
