function deckOfCards(arr) {
    let cardsList = arr.shift().split(', ');
    let n = Number(arr.shift());
    
    for (let i = 0; i < n; i++) {
        let command = arr.shift().split(', ');
        
        switch (command[0]) {
            case "Add":
               
                if (!cardsList.includes(command[1])) {
                    cardsList.push(command[1]);
                    console.log("Card successfully added");
                } else {
                    console.log("Card is already in the deck");
                }
                
                break;
            case "Remove":
                if (!cardsList.includes(command[1])) {
                    console.log("Card not found");
                } else {
                    let j = cardsList.indexOf(command[1]);
                    cardsList.splice(j,1);
                    console.log("Card successfully removed");
                }
                break;
            case "Remove At":
                let k = command[1];
                if (k < 0 || k > cardsList.length - 1) {
                    console.log("Index out of range");
                } else {
                    cardsList.splice(k,1);
                    console.log("Card successfully removed");
                }
                break;
            case "Insert":
                    let l = command[1];
                    if (l < 0 || l > cardsList.length - 1) {
                        console.log("Index out of range");
                    } else {
                        cardsList.splice(l, 0, command[2]);
                        console.log("Card successfully added");
                    }
                
                    break;
        
            default:
                break;
        }
    }
    console.log(cardsList.join(', '));
}
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
"3",
"Add, King of Diamonds",
"Insert, 2, Jack of Spades",
"Remove, Ace of Diamonds"])
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"])
deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
"2",
"Add, Two of Clubs",
"Remove, Five of Hearts"])