function signCheck(numOne, numTwo, numThree) {
    let multiplOne = 0;
    let multiplTwo = 0;
    let result = '';
    multiplOne = numOne * numTwo;
    if (multiplOne > 0 && numThree > 0) {
        result = "Positive";
    } else result = "Negative";
    console.log(result);
}
signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)