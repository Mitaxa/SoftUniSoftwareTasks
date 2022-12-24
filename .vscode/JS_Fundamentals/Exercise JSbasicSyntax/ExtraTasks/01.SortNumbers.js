function sortNumbers(x,y,z) {
    let arr = [];
    arr[0] = x;
    arr[1] = y;
    arr[2] = z;
        arr = arr.sort().reverse();
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(arr[2]);
    }
sortNumbers(2, 1, 3)