function sortArrayBy2Criteria(arr) {
    let sortedArrаy = arr.sort((a,b) =>{
        return a.length - b.length || a.localeCompare(b);
    });
// може и така да се отпечата: sortedArray.forEach(element) => {console.log(element)};
    console.log(sortedArrаy.join('\n'));
}
sortArrayBy2Criteria(['alpha', 'beta', 'gamma'])