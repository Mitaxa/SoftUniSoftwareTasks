function factorialDivision(fact1, fact2) {
    let fact1Result = 1;
    let fact2Result = 1;
    let factDivision = 1;
    for (let i = 1; i <= fact1; i++) {
        fact1Result *= i;
    }
    for (let j =1; j <= fact2; j++) {
        fact2Result *= j;
    }
    factDivision = fact1Result / fact2Result;
    console.log(factDivision.toFixed(2));
}
factorialDivision(5, 2)
factorialDivision(6, 2) 