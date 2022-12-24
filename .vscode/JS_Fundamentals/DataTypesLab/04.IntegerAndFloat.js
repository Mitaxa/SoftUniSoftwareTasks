function integerAndFloat(num1, num2, num3) {
    let result =num1 + num2 + num3;
    let resToString = string(result);
    let isFloat = false;
    for (let i = 0; i < resToString.length; i++) {
if (resToString[i] === ".") {
    isFloat =true;
}
    }
    console.log(`${result} - {(Integer or Float)}`)
}
integerAndFloat(9, 100, 1.1)