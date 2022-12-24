function numbers(sequence){

    let arrOfStrings = sequence.split(" ");
    let numsArr = [];
    let newArr = [];
    for (let el of arrOfStrings) {
        numsArr.push(Number(el));
    }
    let sum = 0;
    let avg = 0;
    
    for (i = 0; i < numsArr.length; i++) {
        sum += numsArr[i];
        
    }
    avg = sum / numsArr.length;
    
    for (i = 0; i < numsArr.length; i++) {
        if (numsArr[i] > avg) {
            newArr.push(numsArr[i]);
        }
    }
    if (avg === 1){
        console.log('No');
    } // може и с тренарен оператор: newArr.length > 0 ? newArr.join(' ') : "No" и console.log(numbers('1')) накрая
    if (newArr.length > 5) {n
        newArr = newArr.sort().splice(-5);
    }
    newArr = newArr.sort().reverse();
    console.log(newArr.join(' '));
}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')