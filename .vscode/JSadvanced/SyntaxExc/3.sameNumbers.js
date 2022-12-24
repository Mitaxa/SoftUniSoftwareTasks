function sameNumbers(num) {
    let buleva = true;
    let str = '';
    let sum = 0; 
    str = str + num;  //може и така: let numAsString = num.asString();
    sum = Number(str[0]);

    for (let i = 0; i < str.length - 1; i++) {
        sum += Number(str[i + 1]);
        if (str[i] !== str[i + 1]) {
            buleva = false;
        }
    }
    if (buleva) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(sum);
}
sameNumbers(2222222)
sameNumbers(1234)