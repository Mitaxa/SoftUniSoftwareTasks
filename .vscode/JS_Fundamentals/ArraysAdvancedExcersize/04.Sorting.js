function sorting(arr){
    let i = 0;
    let sortedArray = [];
    let lastIndex = arr.length-1;
    let lastOddIndex = arr.length-1;
    arr = arr.sort((a,b) => a - b);
    
    for (let i = 0; i < (arr.length - 1) / 2; i++){
       
        sortedArray.push(arr[lastIndex]);
        sortedArray.push(arr[i]);
        lastIndex -= 1;
        
        }
        if (arr.length % 2 !== 0){
            let midEl = arr[((arr.length - 1) / 2)];
            sortedArray.push(midEl)
        }
    
    console.log(sortedArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
