function sumFirstLast(arr){
    return Number(arr.pop()) + Number(arr.shift());
}
console.log(sumFirstLast(['20', '30', '40'])); 
console.log(sumFirstLast(['5', '10'])); 