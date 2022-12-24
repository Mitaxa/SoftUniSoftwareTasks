function lastKnumbersSequence(n, k) {
        let result = [1];
     
        for (let i = 1; i < n; i++) {
            let last = result.slice(-k);
     
            let sum=0;
            for(let element of last) {
                sum+=element;
            }
            result.push(sum);
        }
        return result;
    }
lastKnumbersSequence(6, 3)