function sequence2k(input){
    let n = Number(input[0]);
    let k = 1;
    while(n >= k){
        console.log(k);
        k = k * 2 + 1;
    }
}

sequence2k([8])