function listOfProducts(arr){
    let sorted = arr.sort();

    for (let i = 0; i < sorted.length; i++){
        console.log(`${i + 1}.${sorted[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])