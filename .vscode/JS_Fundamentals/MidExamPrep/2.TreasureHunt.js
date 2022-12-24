function treasureHunt(arr){
   let treasureChest = arr.shift().split('|');
    console.log(treasureChest.join(' '));
    for (let i = 0; i < arr.length; i++) {
        
        let commandItems = arr[i].split(' ');
        let command = commandItems.shift();
        
        console.log(commandItems);
        while(command !== 'Yohoho!') {
            switch (command) {
                case "Loot":
                    for (let itemNum = 0; itemNum <= commandItems.length; itemNum++) {
                        
                    if (!treasureChest.includes(commandItems[itemNum])) {
                        treasureChest.unshift(commandItems[itemNum]);
                        console.log(treasureChest.join(' '));
                    }
                }
                break;
                case "Drop":
                    console.log(commandItems[1]);
                    let removed = treasureChest.splice(commandItems[1],1);
                    console.log(item);
                    if (commandItems[1])
                    treasureChest.push(removed);
                    break;
                case "Steal":
                    let stolenItems = [];
                    stolenItems = treasureChest.splice(-3);
                    console.log(stolenItems).join(', ');
                    break;
            }
        }
        
    }
   console.log(treasureChest);
   console.log('Average treasure gain: {averageGain} pirate credits.');
   console.log('Failed treasure hunt.');

}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])