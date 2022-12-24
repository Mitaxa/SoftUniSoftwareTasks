function stringLength(str1, str2, str3) {
    let sumLengths = str1.length + str2.length + str3.length;
    let avgLength = sumLengths / 3;
    console.log(sumLengths);
    let avgFloored = Math.floor(avgLength);
    console.log(avgFloored);
}
stringLength('chocolate', 'ice cream', 'cake')