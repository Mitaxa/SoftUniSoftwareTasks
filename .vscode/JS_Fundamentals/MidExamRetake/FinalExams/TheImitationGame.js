function imitationGame(arr) {
 
    let codedMessage = arr.shift().split(``);
 
    for (let i = 0; i < arr.length; i++) {
 
        let [operation, index, value] = arr[i].split(`|`);
 
        if (operation === `Decode`) {
            console.log(`The decrypted message is: ${codedMessage.join(``)}`)
            break;
        } else {
            switch (operation) {
                case `Move`:
                    codedMessage = move(index, codedMessage)
                    break;
                case `Insert`:
                    codedMessage = insert(index, value, codedMessage)
                    break;
                case `ChangeAll`:
                    codedMessage = changeAll(index, value, codedMessage)
                    break;
            }
        }
    }
 
    function move(index, codedMessage) {
        let message = codedMessage.join('');
        let firstPart = message.substring(0, index);
        let secondPart = message.substring(index);
 
        message = secondPart + firstPart;
        return message.split('');
    }
 
    function insert(index, value, codedMessage) {
        codedMessage.splice(index, 0, value);
        return codedMessage;
    }
 
    function changeAll(index, value, codedMessage) {
        for (let i = 0; i < codedMessage.length; i++) {
            if (codedMessage[i] === index) {
                codedMessage[i] = value;
            }
        }
        return codedMessage;
    }
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])