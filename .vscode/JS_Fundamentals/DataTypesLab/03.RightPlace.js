function rightPlace(word1, char, word2) {
    let result = "";
    for (let i = 0; i < word1.length; i++) {
        let currentChar = word1[i];
        if (currentChar === "_") {
            result += char;
        } else {
            result += currentChar;
        }
    }
    if (result === word2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}
rightPlace('Str_ng', 'I','Strong')
