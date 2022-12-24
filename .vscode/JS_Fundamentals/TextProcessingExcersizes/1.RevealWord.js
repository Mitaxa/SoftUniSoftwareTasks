function revealWords(words, sentence) {
    let wordsToReveal = words.split(', ');
    let sentenceArr = sentence.split(' ');
    let resultSentence = '';
    
    for (let element of wordsToReveal) {
        for (let word of sentenceArr) {
            if (word.includes('*') && word.length === element.length) {
                sentence = sentence.replace(word, element);
                
            }
        }
    }
    console.log(sentence);
}
revealWords('great', 'softuni is ***** place for learning new programming languages')
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')