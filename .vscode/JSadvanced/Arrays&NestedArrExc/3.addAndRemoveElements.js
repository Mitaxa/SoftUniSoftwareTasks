function addAndRemoveElements(commands){
    let num = 1;
    let arr = [];

    for (let i = 0; i < commands.length; i++){
    switch (commands[i]) {
        case 'add':
            arr.push(num);
            num += 1;
            break;
        case 'remove':
            arr.pop(num);
            num += 1;
            break;
    }
}
if (arr.length === 0){
    console.log('Empty');
}
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
addAndRemoveElements(['add', 'add', 'add', 'add'])