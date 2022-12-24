function shoppingList(input) {
    let shoppingList = input.shift().split('!');
    let commands = input.shift();
    while (commands !== 'Go Shopping!') {
        let tokens = commands.split(' ');
        let command = tokens[0];
        let item = tokens[1];
        let index = shoppingList.indexOf(item);
        switch (command) {
            case 'Urgent':
                if (index < 0) {
                    shoppingList.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (~index) {
                    shoppingList.splice(index, 1);
                }
                break;
            case 'Correct':
                let newItem = tokens[2];
                if (~index) {
                    shoppingList.splice(index, 1, newItem);
                }
                break;
            case 'Rearrange':
                if (~index) {
                    shoppingList.splice(index, 1);
                    shoppingList.push(item);
                }
                break;
            default:
                break;
        }
        commands = input.shift();
    }
    console.log(shoppingList.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])