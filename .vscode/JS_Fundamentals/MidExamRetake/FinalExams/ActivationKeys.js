function activationKeys(input) {
 
    let activationKey = input.shift();
    let commandLine = input.shift();
    
    while (commandLine !== 'Generate') {
        let [command, firstArg, secondArg, thirdArg] = commandLine.split('>>>');;
 
        switch (command) {
            case 'Slice':
                firstArg = Number(firstArg);
                secondArg = Number(secondArg);
                let cut = activationKey.substring(firstArg,secondArg)
                activationKey = activationKey.replace(cut, '')
                console.log(activationKey);
                break;
            
            case 'Flip' :
                if (firstArg === 'Upper') {
                    secondArg = Number(secondArg);
                    thirdArg = Number(thirdArg);
                    let cut  = activationKey.substring(secondArg, thirdArg);
                    activationKey = activationKey.replace(cut, cut.toUpperCase())
                    console.log(activationKey);
 
                } else if (firstArg === "Lower") {
                    secondArg = Number(secondArg);
                    thirdArg = Number(thirdArg);
                    let cut  = activationKey.substring(secondArg, thirdArg);
                    activationKey = activationKey.replace(cut, cut.toLowerCase())
                    console.log(activationKey);
                }
                break;
            
            case 'Contains':
                firstArg = firstArg
                if (activationKey.includes(firstArg)) {
                    console.log(`${activationKey} contains ${firstArg}`)
                } else {
                    console.log(`Substring not found!`)
                }
                break;
            
        }
        commandLine = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`)
}
    
 
 
activationKeys(
    [
        'abcdefghijklmnopqrstuvwxyz',
        'Slice>>>2>>>6',
        'Flip>>>Upper>>>3>>>14',
        'Flip>>>Lower>>>5>>>7',
        'Contains>>>Rs',
        'Contains>>>deF',
        'Generate'
      ]
);