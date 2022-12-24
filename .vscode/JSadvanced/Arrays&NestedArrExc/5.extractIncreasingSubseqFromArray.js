function extractIncreasingSubseqFromArray(arr){
    let newArr = [];
    let buff = arr[0];
    newArr.push(buff);
    
    for (let i = 1; i < arr.length; i++){
        let newBuf = arr[i];
        if (newBuf >= buff) {
            newArr.push(newBuf)
            buff = newBuf;
        }
    }
    return newArr;
}
extractIncreasingSubseqFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])