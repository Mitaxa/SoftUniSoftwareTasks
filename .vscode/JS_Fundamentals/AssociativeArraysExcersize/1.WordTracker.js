function wordsTracker(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};
    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
}
wordsTracker([ 'this sentence',
 'In', 'this', 'sentence', 'you', 'have',
 'to', 'count', 'the', 'occurrences', 'of',
 'the', 'words', 'this', 'and', 'sentence',
 'because', 'this', 'is', 'your', 'task'
])