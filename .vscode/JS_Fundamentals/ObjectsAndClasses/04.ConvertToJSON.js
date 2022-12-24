function convertToJSON(name, lastName, hairColor) {
    person = {name: name, lastName: lastName, hairColor: hairColor};
    console.log(JSON.stringify(person));
}
convertToJSON('George', 'Jones', 'Brown')
convertToJSON('Peter', 'Smith', 'Blond')