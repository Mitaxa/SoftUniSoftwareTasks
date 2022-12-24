function multiplicationTable(n) {
    result = 0;
    for (let i = 1; i <= 10; i++) {
        result = n * i;
        console.log(n, "X", i ,"=", result)
    }
}
multiplicationTable(5)
