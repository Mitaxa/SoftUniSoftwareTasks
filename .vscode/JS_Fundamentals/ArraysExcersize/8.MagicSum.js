function magicSum(array, num) {
    let arrOfValid = [];
    let validPair = '';

    for (let i = 0; i < array.length; i++) {
        let el = array[i];
            for (let j = i + 1; j < array.length; j++) {
                let el2 = array[j];
                let sum = el + el2;
                if(i !== j) {
                    sum = el + el2;
                    if(sum === num) {
                        console.log(el, el2);
                    }
                }
            }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)