function objConvertSortEtc() {
    let phoneBook = { 'Tim': '0834212554', 'Bill': '0896543112'};
    let entries = Object.entries(phoneBook);
    console.log(entries);
// [ ['Tim', '0834212554'], 
// ['Bill', '0896543112'] ]
    let firstEntry = entries[0];
    console.log(firstEntry[0]); // Entry key -> 'Tim
    console.log(firstEntry[1]); //bEntry value -> '0834212554'
}
objConvertSortEtc()