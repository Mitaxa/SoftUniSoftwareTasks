function procesArrFilter() {
    let arr = [1,2,3,4,];
    let newArr = arr.filter(el => {
        //ако сложим map вместо filter ще върши същата работа
        if (el % 2 === 0) {
            return el;
        }
        });

    console.log(`Arr:${arr}`);
    console.log(`newArr: ${newArr}`);
}
procesArrFilter()