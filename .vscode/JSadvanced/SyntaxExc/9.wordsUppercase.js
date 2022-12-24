function wordsUppercase(text) {
    return text.match(/\w+/g).join(', ').toUpperCase();
}
console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));