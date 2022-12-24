function listOfNames(arr){
    arr.sort((a, b) => a.localeCompare(b)); // Ако има малки букви
    for (let i = 0; i <= arr.length - 1; i++){
        console.log(`${i + 1}.${arr[i]}`);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])