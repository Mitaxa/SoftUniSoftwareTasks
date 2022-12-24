function largestPalindrome(listOfLetters) {
    function palindromLen(leftIndex, rightIndex) {
        while (leftIndex >= 0 && rightIndex < listOfLetters.length 
            && listOfLetters[leftIndex] == listOfLetters[rightIndex]) {
                leftIndex--;
                rightIndex++;
            }
            return rightIndex - leftIndex - 1;
    }
    let letters = listOfLetters;
    let maxLen = 0;
    for (let i = 0; i < letters.length; i++) {
        maxLen = Math.max(maxLen, palindromLen(i, i));
    }
    for (let i = 0; i < letters.length; i++) {
        maxLen = Math.max(maxLen, palindromLen(i, i + 1));
    }
    console.log(maxLen);
}
largestPalindrome('abbabbx')
largestPalindrome('abba')