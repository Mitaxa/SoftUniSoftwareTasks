function processOddNumbers(arr){
    let result = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++){
        
        if (i % 2 == 1){
            let doubled = arr[i] * 2;
            result.push(doubled);
        }
    }
    console.log(result.reverse().join(' '));
}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])