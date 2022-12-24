function bombNumbers(sequenceNum, bombArr) {
    let sum = 0;
    let bombNum = bombArr.shift();
    let bombPower = bombArr[0]; 
    let index = sequenceNum.indexOf(bombNum);
    let startIndex = index - bombPower;
    let number = 1 + (bombPower * 2);
    while (sequenceNum.includes(bombNum)) {
    if (startIndex < bombPower) {
    // Тук правя някаква изкуствена история, за да реша задачата...ама не е добре. 
    //После в Judge става цапано!
        number = startIndex + bombPower;
    }
    sequenceNum.splice(startIndex, number);
    sum = 0;
    for (let i = 0; i < sequenceNum.length; i++) {
        sum += sequenceNum[i];
}
 }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])