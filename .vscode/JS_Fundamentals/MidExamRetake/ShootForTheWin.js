function shootForTheWin(input) {
    let targets = input.shift().split(" ").map(Number);
 
    let count = 0;
    let command = input.shift();
 
    while (command !== "End") {
        let indexOfTheTarget = Number.parseInt(command);
 
        if (indexOfTheTarget >= 0 && indexOfTheTarget < targets.length) {
            for (let i = 0; i < targets.length; i++) {
                let currentTarget = targets[indexOfTheTarget];
        
                if (i !== indexOfTheTarget && targets[i] !== -1) {
                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget;
                    } else {
                        targets[i] += currentTarget;
                    }
                }
            }
 
            targets[indexOfTheTarget] = -1;
            count++;
        }
 
        command = input.shift();
    }
 
    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])