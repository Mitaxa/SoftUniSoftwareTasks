function passValid(input) {
    let password = input.shift();
    let line = input.shift();
    while (line != 'Done') {
        let [command, firstArg, secondArg] = line.split(' ');
        let tempPassword = '';
        switch (command) {
            case 'TakeOdd':
                for (let i = 1; i < password.length; i += 2) {
                    tempPassword += password[i];
                }
                console.log(tempPassword);
                password = tempPassword;
                break;
            case 'Cut':
                let index = Number(firstArg);
                let length = Number(secondArg);
                let substring = password.substring(index, index + length);
                password = password.replace(substring, '');
                console.log(password);
                break;
            case 'Substitute':
                tempPassword = password;
                while (tempPassword.includes(firstArg)) {
                    tempPassword = tempPassword.replace(firstArg, secondArg);
                }
                if (password.includes(firstArg)) {
                    console.log(tempPassword);
                } else {
                    console.log('Nothing to replace!');
                }
                password = tempPassword;
        }
        line = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
passValid((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]))