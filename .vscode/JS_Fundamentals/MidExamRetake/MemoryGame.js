function memoryGame(input) {
 
    let sequence = input.shift().split(' ');
    let command = input.shift();
    let turns = 0;
 
    while (command !== 'end') {
        let [index1, index2] = command.split(' ').map(Number);
        turns++;
 
        if (sequence[index1] === sequence[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
            sequence = removeElements(index1, index2);
        } else {
            if (index1 < 0 || index1 >= sequence.length || index2 < 0 || index2 >= sequence.length) {
                console.log("Invalid input! Adding additional elements to the board");
                let index = Math.trunc(sequence.length / 2);
                sequence.splice(index, 0, `-${turns}a`, `-${turns}a`);
            } else {
                console.log("Try again!");
            }
        }
        if (sequence.length === 0) {
            console.log(`You have won in ${turns} turns!`);
            break;
        }
        command = input.shift();
    }
    if (sequence.length > 0) {
        console.log("Sorry you lose :(");
        console.log(sequence.join(' '));
    }
 
 
    function removeElements(index1, index2) {
         const num1 = sequence[index1];
         const num2 = sequence[index2];
         if (num1 === num2) {
             sequence.splice(index1, 1);
             index2 = sequence.indexOf(num2);
             sequence.splice(index2, 1);
         }
        return sequence;
    }
}
memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])