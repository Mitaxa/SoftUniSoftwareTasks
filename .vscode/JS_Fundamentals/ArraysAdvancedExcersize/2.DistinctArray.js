function distinctArray(arr){
    let resultArray = [];
    
    for (let i = 0; i < arr.length; i++){
        
            if (!resultArray.includes(arr[i])) {
                resultArray.push(arr[i]);
            } 
        }
        console.log(resultArray.join(' '));
    }
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])