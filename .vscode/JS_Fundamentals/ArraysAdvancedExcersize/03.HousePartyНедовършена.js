function houseParty(arr){
    let resultArray = [];
    let name = '';
    for (let i = 0; i < arr.length; i++) {
    let let listArr = arr[i].split(' ');
    if (!resultArray.includes(arr[i])) {
        resultArray.push(arr[i]);
    } else {
        console.log(`${name} is already in the list!`)
    }
}
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!',
'George is not going!'])