function arraySumFirstLastElements(input) {
    let index = 0;
    let sum = Number(input[index]);
    let element = Number(input[0]);
    let lastElement = Number(input[0]);;
    while (Number(input[index])) {
        lastElement = Number(input[index]);
        index++;
    }
    
    sum = Number(input[0]) + lastElement;
    console.log(sum);
}
arraySumFirstLastElements([2])