function addAndSubtract(num1, num2, num3) {
    
    let sum = (num1, num2) => num1 + num2;
    let subtract = (sumNum1AndNum2, num3) => sumNum1AndNum2 - num3;

    let sumNum1AndNum2 = sum(num1, num2);
    let finalResult = subtract(sumNum1AndNum2, num3);
    
            console.log(finalResult);
}
addAndSubtract(23, 6, 10)
addAndSubtract(1, 17, 30)
addAndSubtract(42, 58, 100)