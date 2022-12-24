function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(firstChar));
    let endChar = Math.max(secondChar.charCodeAt(secondChar));
    let charsInRangeArray = [];
    if (endChar > startChar){
    for (let current = startChar + 1; current < endChar; current++) {
        
        let currentChar = String.fromCharCode(current);
        
        charsInRangeArray.push(currentChar);
        
    }
} else {
    endChar = Math.min(firstChar.charCodeAt(firstChar));
    startChar = Math.max(secondChar.charCodeAt(secondChar));

    for (let current = startChar + 1; current < endChar; current++) {
        
        let currentChar = String.fromCharCode(current);
        
        charsInRangeArray.push(currentChar);
        
    }
}
    console.log(charsInRangeArray.join(' '));
    
}
charactersInRange('a', "d")