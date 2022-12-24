function negativePositNumbers(arr){
    const resultArr = [];
    
    for (let num of arr) {
        if (num < 0) {resultArr.unshift(num); }
        else { resultArr.push(num); }
    }

    for (let num of resultArr) {
        console.log(num);
    }
}
negativePositNumbers([7, -2, 8, 9])
negativePositNumbers([3, -2, 0, -1])