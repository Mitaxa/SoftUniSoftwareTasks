function orders(product, num) {
    let totalPrice = 0;
    switch (product) {
        case 'coffee': totalPrice = 1.50 * num; break;
        case 'water': totalPrice = 1.00 * num; break;
        case 'coke': totalPrice = 1.40 * num; break;
        case 'snacks': totalPrice = 2.00 * num; break;
    }
    console.log(totalPrice.toFixed(2));
}
orders("water", 5)
orders("coffee", 2)