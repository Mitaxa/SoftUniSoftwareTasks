function firstAndLastKnumbers(array) {
    let num = array[0];
    let sliced = array.slice(1, num + 1);
    console.log(sliced.join(` `));
    sliced = array.slice(array.length - num, array.length);
    console.log(sliced.join(` `));
}
firstAndLastKnumbers([2, 7, 8, 9])
firstAndLastKnumbers([3, 6, 7, 8, 9])