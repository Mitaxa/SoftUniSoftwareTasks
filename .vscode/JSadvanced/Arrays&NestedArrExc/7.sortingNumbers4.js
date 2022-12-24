function sortingNumbers(arrNum) {
    let sortArr = arrNum.sort((a, b) => a - b);
    let result = [];
    while(sortArr.length > 0){
        result.push(sortArr.shift());
        result.push(sortArr.pop());
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));