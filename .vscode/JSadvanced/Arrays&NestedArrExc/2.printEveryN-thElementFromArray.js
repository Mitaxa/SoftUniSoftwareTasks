function printEveryNthElFromArray(arrStrings, step){
    let newArr = [];
    for (let i = 0; i < arrStrings.length; i += step){
        newArr.push(arrStrings[i]);
    }
    return (newArr);
}
printEveryNthElFromArray(['5', '20', '31', '4', '20'], 2)
printEveryNthElFromArray(['dsa', 'asd', 'test', 'tset'], 2)
printEveryNthElFromArray(['1', '2', '3', '4', '5'], 6)