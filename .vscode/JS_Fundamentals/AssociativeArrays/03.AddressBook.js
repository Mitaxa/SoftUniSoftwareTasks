function solve(data) {
    let result = {};

    for (let line of data) {
        let [name, address] = line.split(':');
        result[name] = address;
    }
    let unsortedKey = Object.keys(result);
    let sortKey = unsortedKey.sort((a,b)=> a.localeCompare(b));
    
    for (let key of sortKey) {
        console.log(key, "->", result[key]);
    }

}
solve(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave',
 'Bill:Ornery Rd'])