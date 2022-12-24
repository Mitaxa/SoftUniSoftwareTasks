function evenAndOddSubtraction(arrNum) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            sumEven += arrNum[i];
        } else sumOdd += arrNum[i];
    }
    console.log(sumEven - sumOdd);
}
evenAndOddSubtraction([1,2,3,4,5,6])