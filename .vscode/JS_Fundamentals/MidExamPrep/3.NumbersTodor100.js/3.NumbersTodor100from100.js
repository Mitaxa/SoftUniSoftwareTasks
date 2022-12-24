function numbers(sequence) {
    let arrOfNumber = sequence.split(" ").map(Number);
    let sum = 0
    for (let el of arrOfNumber){
        sum += el;
    }

    let avg = sum / arrOfNumber.length;

    arrOfNumber = arrOfNumber
        .filter(el =>  el > avg) //
        .sort((x,y) => y - x) //
        .slice(0,5);

        return arrOfNumber.length > 0 ? arrOfNumber.join(" ") : "No";
// тренарен операторс return свързан с console.log(numbers) който проверява дали
// масива е с повече от 0 елемента и има 2 случая-нормален и ако е "No"
}
console.log(numbers('10 20 30 40 50'));
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));
console.log(numbers('1'))
console.log(numbers('-1 -2 -3 -4 -5 -6'));