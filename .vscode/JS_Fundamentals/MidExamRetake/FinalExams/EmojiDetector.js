function emojiDetector(input) {
    let emojiPattern = /(\:{2}|\*{2})(?:[A-Z][a-z]{2,})\1/g; ///(\:{2}|\*{2})(?:[A-z][a-z]{2,})\1/g;
    let coolPattern = /\d/g;
    let matches = input[0].match(emojiPattern);
    let coolMatches = input[0].match(coolPattern);
    let coolThreshold = coolMatches.reduce((a, b) => Number(a) * Number(b));
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${matches.length} emojis found in the text. The cool ones are:`);
    for (let currEmoji of matches) {
         let totalValue = 0;
        for (let currLetter of currEmoji) {
            if (currLetter !== ':' && currLetter !== '*') {
                let value = currLetter.charCodeAt(0);
                totalValue += value;
            }
        } 
 
        if (totalValue >= coolThreshold) {
            console.log(currEmoji);
        }
    }
}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])