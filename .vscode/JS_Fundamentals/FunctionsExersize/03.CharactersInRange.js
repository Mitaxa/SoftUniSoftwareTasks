function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt[0], secondChar.charCodeAt[0]);
    let endChar = Math.max(firstChar.charCodeAt[0], secondChar.charCodeAt[0]);

    let charsInRangeArray = [];
    
    for (let current = startChar + 1; current < endChar; current++) {
        let currentChar = String.fromCharCode(current);
        charsInRangeArray.push(currentChar);
} 
    console.log(charsInRangeArray.join(' '));
    
}
charactersInRange('a', 'd')