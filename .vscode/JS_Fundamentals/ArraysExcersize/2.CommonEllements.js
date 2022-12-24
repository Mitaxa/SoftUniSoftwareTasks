function commonEllements(arr1,arr2) {
    for (const element of arr1) {
        if (arr2.includes(element)) {
            console.log(element);
        }
        
    }
}
commonEllements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
commonEllements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])
    
