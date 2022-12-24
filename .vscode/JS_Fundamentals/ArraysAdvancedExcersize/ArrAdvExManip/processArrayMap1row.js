function processArrayMap1raw(){
    let arr = [1,2,3,4,];
    let newArray = arr.map(el => el * el);
    // map метода винаги връща нов масив!
    
    console.log(newArray);
}
processArrayMap1raw()