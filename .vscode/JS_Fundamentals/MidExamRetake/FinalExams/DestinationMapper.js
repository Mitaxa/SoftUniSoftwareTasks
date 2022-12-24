function destinationMapper(destination) {
    let pattern = /([=\/])([A-Z][a-z]+)\1/gi;
  
    let count = 0;
    let ourCity = [];
 
    if (pattern.test(destination)) {
        const ourDest = destination.match(pattern);
 
        ourDest.forEach(destination => {
            count += (destination.length - 2);
            ourCity.push(destination.slice(1, (destination.length - 1)));
 
        });
    }
    
        console.log(`Destinations: ${ourCity.join(", ")}`);
        console.log(`Travel Points: ${count}`);
    
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")