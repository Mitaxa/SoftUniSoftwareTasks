function theatrePromotions(day, age) {
    let price = 0;
    if (day == 'Weekday') {
        if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
            price = 12;
        }
        else if ((age > 18 && age <= 64)) {
            price = 18;
        } else console.log("Error!");
// Слрдесщите If трябва да са с else if само!
            if (day == "Weekend") {
            if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
                price = 15;
            }
        }
            else if ((age > 18 && age <= 64)) {
                price = 20;
            } else console.log("Error!");
            if (day == "Holliday") {
                if (age >= 0 && age <= 18)  {
                    price = 5;
                }
                else if (age > 64 && age <= 122) {
                    price = 10;
                }
                else if ((age > 18 && age <= 64)) {
                    price = 12;
                } else console.log("Error!");
             }
        }
     }
}
console.log(`${price} + "$"`);
theatrePromotions("Weekday", 42)