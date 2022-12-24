function sort(arr) {
    let descendingOrder = arr.slice().sort((a, b) => b - a);
    //the initial arr will be sorted in ascending order
    arr = arr.sort((a, b) => a - b);
    //console.log(descendingOrder);
    //console.log(arr);
    const output = [];
    for (let i = 0; i < arr.length / 2; i++) {
        output.push(arr[i]);
 
        output.push(descendingOrder[i]);
    }
    if (output.length !== arr.length){
        output.pop();
    }
    return output;
}
console.log(sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));