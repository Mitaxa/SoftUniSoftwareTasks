function cutAndReverse(input) {
    let reversed = input.split('').reverse().join('');
    let sliceOne = reversed.slice(reversed.length/2, reversed.length);
    let sliceTwo = reversed.slice(0, reversed.length/2)
    console.log(sliceOne);
    console.log(sliceTwo);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
