function solve(arr) {
    const destinations = new Map();

    for (const line of arr) {
        const [country, town, value] = line.split(' > ');

        if (!destinations.has(country)) {
            destinations.set(country, new Map());
        }
        if (!destinations.get(country).has(town)) {
            destinations.get(country).set(town, value);
        } else if (destinations.get(country).get(town) > value) {
            destinations.get(country).set(town, value);
        }
    }
    
    console.log(destinations);
}
solve(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000",
 "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"])