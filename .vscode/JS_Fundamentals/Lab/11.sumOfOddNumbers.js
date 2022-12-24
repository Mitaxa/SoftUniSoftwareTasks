function sumOfOddNumbers(n) {
    let oddSum = 0;
    let i = 1;
    let j = 1;
    while (i <= n) {
        if (j % 2 !== 0) {
            oddSum += j;
            console.log(j);
            j+=2;
            i++;
    }
  }
  console.log(`Sum: ${oddSum}`);
}
sumOfOddNumbers(5)