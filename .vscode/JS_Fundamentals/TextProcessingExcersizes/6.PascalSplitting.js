function pascal(string) {
    let arr = [];
    let previous = 0;

    for (let i = 0; i <string.length; i++) {
        if (string[i] == string[i].toUpperCase() && i != 0) {
            let result = string.substring(previous, i);
            previous = i;
            arr.push(result);
        }
    }
    arr.push(string.substring(previous));
    console.log(arr.join(', '));
}
pascal('SplitMeIfYouCanHaHaYouCantOrYouCan')