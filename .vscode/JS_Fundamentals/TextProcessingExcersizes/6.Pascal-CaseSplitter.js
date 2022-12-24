function pascalCaseSplitter(input) {
    let arr = [];
    let index = 1;
    let end = input.length;
    let cut = 0;
    while (index < end) {

        if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <=90) {
            arr.push(input.slice(cut, input.length));
            cut = index;
        }
        index++;
    }
    arr.push(input.slice(cut, input.length));
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i - 1].replace(arr[i],'');
    }
    console.log(arr.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
