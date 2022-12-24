function poundsToDollars(currency) {
    let dollars = currency;
    dollars = currency * 1.31;
    console.log(dollars.toFixed(3));
}
poundsToDollars(80)