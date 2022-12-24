function softUniBarIncome(input) {

    let totalSum = 0;
    let reggex = /%(?<name>[A-Z][a-z]+\w+)%[^$%|.]*\<(?<product>\w+)>[^$%|.0-9]*\|(?<count>\d+)\|[^$%|.0-9]*(?<price>\d+\.\d+)?\$/g;

    let text = input.join('-');
    let current = reggex.exec(text);

    while (current) {
        let currentPrice = current.groups.count * current.groups.price;
        console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`);
        totalSum += currentPrice;
        current = reggex.exec(text);
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])