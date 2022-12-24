function greatestCommonDivisor(num1, num2) {
    let gcd = 1;
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    for (let i = 1; i <= min; i++) {
        if (min % i === 0 && max % i === 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}
greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)