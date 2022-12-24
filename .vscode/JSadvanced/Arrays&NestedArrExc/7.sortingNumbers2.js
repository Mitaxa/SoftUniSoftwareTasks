function sortingNumber(input) {
    let sort = input.sort((a, b) => a - b)
    let bigNumbers = (sort.splice(sort.length / 2, sort.length - 1)).reverse()
    let arr = []
 
    for (let i = 0; i < sort.length; i++) {
        arr.push(sort[i], bigNumbers[i])
    }
    return arr;
}
sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])