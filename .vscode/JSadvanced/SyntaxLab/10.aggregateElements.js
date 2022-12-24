function aggregateElements(arr) {
    let sum = 0;
    let inversedSum = 0;
    let concatSum = '';
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        inversedSum += 1 / arr[i];
        concatSum += arr[i];
    }
    console.log(sum);
    console.log(inversedSum);
    console.log(concatSum);
}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])