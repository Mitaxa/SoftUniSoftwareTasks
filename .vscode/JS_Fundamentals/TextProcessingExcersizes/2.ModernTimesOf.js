function modernTimesOf(input) {
    let sentence = input.split(' ');
    
    for (const word of sentence) {
        if (word.startsWith('#') && word.length > 1) {
            let flag = true;
            let wordLower = word.toLowerCase();
            for (let index = 1; index < wordLower.length; index++) {
                if (wordLower.charCodeAt(index) < 97 || wordLower.charCodeAt(index) > 122) {
                    // ASCII small letters 97-- 122
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(word.slice(1));
            }
        }
    }
}
modernTimesOf('Nowadays everyone uses # to tag a #special word in #socialMedia')
