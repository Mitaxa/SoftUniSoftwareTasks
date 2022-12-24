function phoneBook(assocArr) {
    let phoneBook = {};
    for (let line of assocArr) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        phoneBook[name] = number;
    }
    for (let key in phoneBook) {
            console.log(`${key} -> ${phoneBook[key]}`);
    }
}
phoneBook(['Tim 0834212554', 'Peter 0887547887',
 'Bill 0896543112', 'Tim 0876566344'])