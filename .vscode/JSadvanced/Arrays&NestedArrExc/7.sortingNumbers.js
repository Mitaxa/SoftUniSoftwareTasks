function sortingNumbers(arr){
    let newArr = [];
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length / 2; i++){
        newArr.push(arr[i]);
        let end = arr.length - i - 1;
        newArr.push(arr[end]);
        end += - 1;
    }
    
    return newArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])