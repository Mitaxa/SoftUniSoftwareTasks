function shopping(input) {
    let budget = Number(input[0]);
    let n = Number(input[1]);
    let m = Number(input[2]);
    let p = Number(input[3]);
    const videoPrice = 250;
    const processorPrice = n * 250 * 0.35;
    const ramPrice = n * 250 * 0.1;
    let difference = 0;
    let totalSum = (n * videoPrice) + (m * processorPrice) + (p * ramPrice);
    if (n > m) {
        totalSum = totalSum * 0.85;
    }
    if (budget >= totalSum) {
        difference = (budget - totalSum).toFixed(2);
        console.log(`You have ${difference} leva left!`)
    } else {
        difference = (totalSum - budget).toFixed(2);
        console.log(`Not enough money! You need ${difference} leva more!`)
    }

}
shopping(["900", "2", "1", "3"])