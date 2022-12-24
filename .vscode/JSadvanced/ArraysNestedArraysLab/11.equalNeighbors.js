function equalNeighbors(arr){
    let sum = 0;

     for (let i = 0; i < arr.length - 1; i++){
        for (let j = 1; j < arr[i].length; j++){
            if (arr[i][j] == arr[i + 1][j]) {
                sum ++;
            }
            if (arr[i][j] ==arr[i][j - 1]){
                sum++;
            }
        }
     }
     for (let i = 0; i < arr[arr.length - 1].length; i++){
        if (arr[arr.length - 1][i] == arr[arr.length - 1][i + 1]){
            sum ++;
        }
     }
     for (let i = 0; i < arr.length - 1;i++){
        if (arr[i][0] == arr[i + 1][0]){
            sum++;
        }
     }
     return sum;
}
equalNeighbors([
    ['2', '3', '4', '7', '0'], 
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'], 
    ['9', '8', '7', '5', '4']])
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'], 
    ['well', 'done', 'yo', '6'], 
    ['not', 'done', 'yet', '5']])