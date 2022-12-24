function printAndSum(start, end) {
    let printLine = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum = sum + i;
        printLine +=`${i} `

    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}
printAndSum(5,10)