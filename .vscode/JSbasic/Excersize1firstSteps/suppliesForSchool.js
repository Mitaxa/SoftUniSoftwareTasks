function suppliesForSchool(input) {
    let numPencilPacks = Number(input[0]);
    let numMarkerPacks = Number(input[1]);
    let litresTableCleaning = Number(input[2]);
    let discountPercentege = Number(input[3]);
    let totalPrice = ((numPencilPacks * 5.80) + (numMarkerPacks * 7.20) + (litresTableCleaning * 1.2));
    totalDiscountedPrice = totalPrice - (totalPrice * discountPercentege / 100);
    console.log(totalDiscountedPrice);
}
suppliesForSchool(["2", "3", "4", "25"])