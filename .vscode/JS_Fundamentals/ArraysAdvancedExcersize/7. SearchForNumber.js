function searchForNumber(arr1, arr2) {
    let countNumbers = arr2.shift();
    let deleteCount = arr2.shift();
    let searchedNum = arr2.shift();
    let manipArr = arr1.splice(0,countNumbers);
    let deletedArr = manipArr.splice(0, deleteCount);
    
    let sum = 0;
    for (let i = 0; i < manipArr.length; i++) {
       
        if (manipArr[i] === searchedNum) {
            sum += 1;
        }
    }
    console.log(`Number ${searchedNum} occurs ${sum} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5])