function oddOccurrences(arr) {
    let obj = {};
    arr = arr.toLowerCase().split(' ');
    let str = '';
 
    for (const text of arr) {
        if (!obj.hasOwnProperty(text)) {
            obj[text] = 1;
        } else {
            obj[text] = obj[text] + 1;
        }
    }
    obj = Object.entries(obj);
    for (const [word, count] of obj) {
        if (count % 2 === 1) {
            str += word;
            str += ' ';
        }
    }
    console.log(str);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')