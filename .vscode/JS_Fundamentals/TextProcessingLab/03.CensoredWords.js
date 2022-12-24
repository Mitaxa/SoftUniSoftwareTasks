function censoredWords(text, word) {
    let sentence = text.split(' ');
    let wordL = word.length;
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(wordL));
    }
    console.log(text);
}
censoredWords('A small sentence with some words', 'small')