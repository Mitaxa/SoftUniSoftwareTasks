function treasureHunt(data) {
    let state = data.shift().split('|');
    
    let index = 0;
    let command = data[index];

    index++;
    let i;
    while(command !== "Yohoho!") {
        let tokens = command.split(' ');
        let operation = tokens.shift();

        switch(operation) {
            case "Loot": 
                for (let el of tokens) {
                    if (!state.includes(el)){
                        state.unshift(el)
                    }
                }
                
                break;
            case "Drop": 
                i = Number(tokens[0]);
                if (i < 0 || i > state.length) {
                    command = data[index];
                    index++;
                    continue;
                }
                let element = state.splice(i,1);
                state.push(element[0])
 //горните 2реда могат да се наишат грозно така: state.push(state.splice(i,1)[0]);
            break;
            case "Steal": 
                let count = Number(tokens[0]);
                let items = state.splice(-count);
                console.log(items.join(', '));
            break;
        }command = data[index];
        index++;
    }
    
    if (state.length > 0) {
        let sum = 0;
    for (let el of state) {
        sum += el.length;
    }
        let avg = sum / state.length;
    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
treasureHunt(["Diamonds|Silver|Shotgun|Gold", 
"Loot Silver Medals Coal", 
"Drop -1", "Drop 1", "Steal 6", "Yohoho!"])