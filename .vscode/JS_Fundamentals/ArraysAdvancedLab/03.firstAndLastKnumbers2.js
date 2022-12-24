function firstAndLastKnumbers(array){
    let k = array.shift();
    console.log(array.slice(0, k).join(' '));
    console.log(array.slice(array.length - k, array.length).join(' '));
}
firstAndLastKnumbers([2, 7, 8, 9])
firstAndLastKnumbers([3, 6, 7, 8, 9])