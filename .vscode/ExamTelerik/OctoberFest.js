//b = 15 - Gunter's initial budget
//c = 3 - cost of a beer
//e = 2 cups - number of empty cups Gunter needs to have to exchange for one free beer
function octoberFest(input) {
    let b = Number(input[0]);
    let c = Number(input[1]);
    let e = Number(input[2]);
    let initialBeers = Math.floor(b / c);
    let totalBeers = initialBeers;
    let moneyLeft = b % c;
    for (let i = 1; i <= initialBeers; i++) {
        console.log(b, c, e );
        let recCups = initialBeers;
        console.log(recCups, moneyLeft);
        let numberOfNewBeers = Math.floor(initialBeers / e);
        console.log(numberOfNewBeers);
        if (initialBeers < e && moneyLeft === 0) {
            break;
        }
        if (numberOfNewBeers / e < e && moneyLeft < c) {
            totalBeers = initialBeers + numberOfNewBeers;
            break;
        } else {
            numberOfNewBeers = numberOfNewBeers + 1;
            totalBeers = totalBeers + numberOfNewBeers;

        }
    }
    console.log(totalBeers)
}

octoberFest([12, 4, 4]);