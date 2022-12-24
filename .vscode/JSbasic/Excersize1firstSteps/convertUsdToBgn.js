function convertUsdToBgn(input) {
    const fixedValue = 1.79549;
    let usd = Number(input[0]);
    let bgn = usd * fixedValue;
    console.log(bgn);
}

convertUsdToBgn(["22"])