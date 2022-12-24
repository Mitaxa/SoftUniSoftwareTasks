function maxNumber(array) {
    let arrayL = array.length;
    let newArray = [];

    for (let index = 0; index < arrayL; index++) {
        let number1 = array[index];
        let isLargest = true;
        for (let j = index + 1; j < arrayL; j++) {
            let number2 = array[j];
            if(number1 <= number2) {
                isLargest = false;
            }

        }
        if (isLargest) {
            newArray.push(number1);
        }
    }
    console.log(newArray.join(" "));
            
       
        }
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])