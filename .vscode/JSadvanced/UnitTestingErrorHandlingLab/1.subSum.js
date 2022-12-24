function subSum(array, startIndex, endIndex) {

    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    let result = 0;
    for (let i = startIndex; i <= endIndex; i++ ) {
        result += Number(array[i]);
    }
    
    return result;

}
subSum([10, 20, 30, 40, 50, 60], 3, 300)