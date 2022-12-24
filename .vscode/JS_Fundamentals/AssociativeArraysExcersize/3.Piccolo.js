function piccolo(array) {
    let obj = {};
    for (let el of array) {
        let [direction, carNumber] = el.split(", ");
        if (direction === "IN") {
            obj[carNumber] = direction;
        } else {
            delete obj[carNumber];
        }
    }
    let numbers = Object.keys(obj);
    if (numbers.length <= 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortNumbers = numbers.sort();
        for (let el of sortNumbers) {
            console.log(el);
        }
    }
}
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT',
 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH',
 'IN, CA2822UU'])
 piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA'])