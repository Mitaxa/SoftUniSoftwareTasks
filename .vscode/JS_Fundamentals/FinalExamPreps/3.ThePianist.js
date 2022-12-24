function thePianist(data) {
    let n = Number(data.shift());
    for (let i = 0; i < n; i++) {
        let  [piece, composer, key] = data.shift().split("|");
        if (store.hasOwnProperty(piece)) {
            store[piece] = {};
        }
        store[piece][composer] = key;
        }
        let line = data.shift();
        while(line !== "Stop") {
            let [action, piece, composer, key] = line.split("|");
            switch(action){
                case "Add":
                    if (store.hasOwnProperty(piece)) {
                        console.log(`${piece} is already in the collection!`);
                        break;
                    }
                    store[piece] = {};
                    store[piece][composer] = key;
                    console.log(`${piece} ny ${composer} in ${key} is added to the collection!`);
                    break;
                case "Remove":
                    if (!store.hasOwnProperty(piece)){
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                        break;
                    }
                    delete store[piece];
                    console.log(`Successfully removed ${piece}!`);
                    break;
                case "ChangeKey":
                    if (!store.hasOwnProperty(piece)){
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    }
                    for
                    break;
            }
        line = data.shift();
    }
    console.table(store);
    console.log(`${Piece} -> Composer: ${composer}, Key: ${key}`);
}
thePianist([ '3',
    
    'Fur Elise|Beethoven|A Minor',
    
    'Moonlight Sonata|Beethoven|C#Minor',
    
    'Clair de Lune|Debussy|C# Minor',
    
    'Add|Sonata No.2|Chopin|B Minor',
    
    'Add|Hungarian RhapsodyNo.2|Liszt|C# Minor',
    
    'Add|Fur Elise|Beethoven|C# Minor',
    
    'Remove|Clair de Lune',
    
    'ChangeKey|Moonlight Sonata|C#Major',
    
    'Stop'
    
    ])