function sumFirstAndLast(input) {
    input = input.map(Number);
    console.log(input[0] + input.pop());
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])