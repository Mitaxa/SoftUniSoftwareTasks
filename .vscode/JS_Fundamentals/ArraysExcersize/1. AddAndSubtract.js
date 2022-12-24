function addAndSubtract(arrNums) {
    sum = 0;
    sumMod = 0;
     modArr = [];
     let arrNumsL = arrNums.length;
    for (let i = 0; i < arrNumsL; i++) {
        sum += arrNums[i];
        if (arrNums[i] % 2 === 0) {
            modArr[i] = arrNums[i] + i;
            sumMod +=  modArr[i];
        } else {
            modArr[i] = arrNums[i] - i;
            sumMod +=  modArr[i];
        }
    }
    console.log(modArr);
    console.log(sum);
    console.log(sumMod);
}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])