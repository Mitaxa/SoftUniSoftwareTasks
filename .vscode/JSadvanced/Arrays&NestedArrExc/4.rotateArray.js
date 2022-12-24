function rotateArray(arr, num){
    let buff = 0;
    let str = '';

    for (let i = 1; i <= num; i++){
        buff = arr.pop();
        arr.unshift(buff);
    }
    for (let j = 0; j <= arr.length - 2; j++){
        str += arr[j] + ' ';
    }
    str += arr[arr.length - 1];
    console.log(str);
    
}
rotateArray(['1', '2', '3', '4'], 2)
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)