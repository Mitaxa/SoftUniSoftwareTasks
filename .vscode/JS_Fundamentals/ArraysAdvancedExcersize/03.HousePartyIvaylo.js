function houseParty(arr){
    let resultArray = [];
    for (let element of arr){
        let command = element.split(' ');
        let name = command[0];
// може да се реши и с проверка дали включва "not" вместо това-
//дали са 3 или 4 елемента
        if(command.length === 3){
            if(resultArray.includes(name)){
                console.log(`${name} is already in the list!`);
            } else {
            resultArray.push(name);
        } 
    } else {
            if(!resultArray.includes(name)){
                console.log(`${name} is not in the list!`)
            } else {
                let index = resultArray.indexOf(name);
                resultArray.splice(index,1);
            }
        }
    }
    console.log(resultArray.join('\n'));
}
houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])