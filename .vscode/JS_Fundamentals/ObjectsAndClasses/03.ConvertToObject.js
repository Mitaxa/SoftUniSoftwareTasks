function convertToObject(json) {
    
    let person = JSON.parse(json);
    let entries = Object.entries(person);
    for (let [ key, value ] of entries) {
    console.log(`${key}: ${value}`);
}
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')