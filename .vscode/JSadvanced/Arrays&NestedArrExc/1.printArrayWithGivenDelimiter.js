function printArrayWithGivenDelimiter(arrOfStrings, delimiter){
    let newString = '';
    let leng = arrOfStrings.length - 1;
    for (let i = 0; i < arrOfStrings.length - 1; i++) {
        newString += arrOfStrings[i] + delimiter;
    }
    newString += arrOfStrings[leng];
    console.log(newString);
}
printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-')