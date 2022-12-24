function puppyCare(input) {
    let foodBought = Number(input[0]);
    let consumedFood = 0;
    let index = 1;
    foodBought = foodBought * 1000;
    while(input[index] !== "Adopted") {
        consumedFood = consumedFood + Number(input[index]);
        if (consumedFood > foodBought) {
            index++;
        } else index++;

  } if (consumedFood <= foodBought) {console.log(`Food is enough! Leftovers: ${foodBought - consumedFood} grams.`);
} else console.log(`Food is not enough. You need ${consumedFood - foodBought} grams more.`);
} 
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])