function mathPower(num, power) {
    let res = 1;
    for (let i = 0; i < power; i++){
        res = res * num;
    }
    console.log(res)
}
mathPower(2, 8)