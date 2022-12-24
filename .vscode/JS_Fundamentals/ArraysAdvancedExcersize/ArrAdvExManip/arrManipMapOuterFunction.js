function arrManipMap() {
    let arr = [1, 2, 3, 4];
    let newArr = arr.map(test);
    function test() {
        console.log('BataMata');
    }
    console.log(`Arr: ${arr}`);
}
arrManipMap()