// function bombDetonation(arr1)// => Judge {
    function bombDetonation(arr1, arr2) {

        let specialBombNum = arr2.shift();
        let powerBomb = arr2.shift();
    
        // Judge Input Setup, when only single array is passed => bombDetonation(['1 2 2 4 2 2 2 9', '4 2', '']);
        // let [specialBombNum, powerBomb] = [...arr1[1].split(' ').map(Number)];
        // let numberArray = [...arr1[0].split(' ').map(Number)];
    
        // for (let i = 0; i < numberArray.length; i++) {
        for (let i = 0; i < arr1.length; i++) {
    
            // if (arr1.includes(specialBombNum)) {
            if (arr1[i] === specialBombNum) {
    
                // let indexSpecial = arr1.indexOf(specialBombNum);
    
                // for (let i = indexSpecial - 1; i >= powerBomb; i--) {
                //     arr1.splice(i, 1);
    
                // }
    
                // for (let i = powerBomb - 1; i <= indexSpecial; i++) {
                //     arr1.splice(i, 1);
    
                // }
    
                // arr1.splice(specialBombNum);
    
    
    
                // If bombNumber is included in the numberArray, calulate its lower range position
                // and bombCount in order to set up your splice function. Carefull, lower range can be
                // negative and therefor validation must check and correct the range and count accordingly
                let lowerRange = i - powerBomb;
                let bombCount = 1 + (powerBomb * 2);
    
                while (lowerRange < 0) {
                    lowerRange++;
                    bombCount--;
                }
    
                arr1.splice(lowerRange, bombCount);
                // Important to set back the for-loop, since it has been modified and not to miss out on
                // a valid bombNumber or use includes() and indexOf() to avoid setting back i
                i--;
            }
    
        }
        let reducer = (a, b) => a + b;
        console.log(arr1.reduce(reducer));
    }
    
    bombDetonation([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
        [2, 1]
    );
    bombDetonation([1, 7, 7, 1, 2, 3],
        [7, 1]
    );
    bombDetonation([1, 2, 2, 4, 2, 2, 2, 9],
        [4, 2]
    );
    bombDetonation([1, 4, 4, 2, 8, 9, 1],
        [9, 3]
    );