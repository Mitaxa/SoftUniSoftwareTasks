function arrayManipulations(commands){
    let arr = commands.shift().split(' ').map(Number);
    for (let i = 0; i < arr.length; i++){
        let [command , firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case "Add": function add(firstNum){
                arr.push(firstNum);
            } break;
            case "Remove": function remove(firstNum){
                arr = arr.filter(firstNum => firstNum !== arr[i]);
            } break;
            case "RemoveAt": function removeAt(firstNum){
                arr.splice(firstNum);
            }break;
            case "Insert": function insert(firstNum, secondNum){
                arr.splice(firstNum, 0, secondNum);
            }break;
        }
    }

    console.log(arr.join(' '));
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])