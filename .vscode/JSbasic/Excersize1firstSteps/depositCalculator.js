function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let yearInterest = Number(input[2]);
    let totalSum = depositedSum + depositTime * ((depositedSum * yearInterest / 100) / 12);
    console.log(totalSum);
}
depositCalculator(["200", "3", "5.7"])