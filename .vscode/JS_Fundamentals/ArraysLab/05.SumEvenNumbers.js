function sumEvenNumbers(arr) {
    let sumEvenNum = 0;
    for (let i = 0; i < arr.length; i++){
        
        if (Number(arr[i]) % 2 === 0) {
            sumEvenNum += Number(arr[i]);
        }
    }
    console.log(sumEvenNum);
}
sumEvenNumbers(['1','2','3','4','5','6'])