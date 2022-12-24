function perfectNumber(num) {
    let sumOfDivisors = 1;
    for (let i = 2; i < num; i++) {
        
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    } 
     let result = (sumOfDivisors === num) ? 
     "We have a perfect number!" : "It's not so perfect."
    {console.log(result);
}
}
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)