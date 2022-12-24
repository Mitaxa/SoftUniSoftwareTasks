function sumDigits(input) {
    let numberAsString = input.toString();
    let sumeOfAllDigits = 0;

    for (let index = 0; index < numberAsString.length; index++) {
        let currentDigit = Number(numberAsString[index])
        sumeOfAllDigits += currentDigit;
        
    }
    console.log(sumeOfAllDigits);
    
}
sumDigits(245678)