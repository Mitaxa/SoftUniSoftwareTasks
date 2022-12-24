function equalSumsEvenOddPosition(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = "";
    for (let index = start; index <= end; index++) {
        let curNum = "" + index;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < curNum.length; j++){
            let currDigit = Number(curNum[j]);
            if (j % 2 === 0){
                evenSum += currDigit;
            } else {
                oddSum += currDigit;
            }
        }
        if (oddSum === evenSum) {
            printLine += `${index} `
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(['100000', '100050'])
