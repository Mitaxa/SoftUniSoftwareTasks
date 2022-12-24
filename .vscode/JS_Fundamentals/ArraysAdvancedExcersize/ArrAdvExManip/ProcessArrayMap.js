function processArrayMap(){
    let arr = [1,2,3,4,];
    let newArray = arr.map((el) => {
        return el * 2;
// map функцията Винаги връща НОВ масив!
    })
    console.log(newArray);
}
processArrayMap()