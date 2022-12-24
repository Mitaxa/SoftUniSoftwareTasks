function division(number) {
    let divisibleBy = 1;
    if (number % 10 == 0) {
        divisibleBy = 10;
        console.log(`The number is divisible by ${divisibleBy}`);
    }
    else if (number % 7 === 0) {
        divisibleBy = 7;
        console.log(`The number is divisible by ${divisibleBy}`);
} else if (number % 6 === 0) {
    divisibleBy = 6;
    console.log(`The number is divisible by ${divisibleBy}`);
} else if (number % 3 === 0) {
        divisibleBy = 3;
        console.log(`The number is divisible by ${divisibleBy}`);
    }
    else if (number % 2 === 0) {
        divisibleBy = 2;
        console.log(`The number is divisible by ${divisibleBy}`);
    } else 
    console.log("Not divisible");
}
division(7)