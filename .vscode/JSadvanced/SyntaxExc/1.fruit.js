function fruit(str, weight, price) {
    let money = 0;
    let fruit = '';
    weight = weight / 1000;
    money = weight * price;
    fruit = str;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)