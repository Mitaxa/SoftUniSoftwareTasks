function foodDelivery(input) {
    let chickenDishPrice = 10.35;
    let fishDishPrice = 12.40;
    let vegetarianDishPrice = 8.15;
    let numChickenDishes = Number(input[0]);
    let numFishDishes = Number(input[1]);
    let numVegetarianDishes = Number(input[2]);
    let totalPrice = 0;
    let desertPrice = 0;
    totalPrice = (numChickenDishes * 10.35 + numFishDishes * 12.40 + numVegetarianDishes * 8.15);
    desertPrice = totalPrice * 20 / 100;
    totalPrice = totalPrice + desertPrice + 2.50;
    console.log(totalPrice);
}
foodDelivery(["9", "2", "6"])