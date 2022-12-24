function valueOfaString(arr){
    let str = arr[0];
    let command = arr[1];
    let sum = 0;
     
    for (let el of str) {
        if(command === `LOWERCASE`) {
        if(el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122){
            sum += Number(el.charCodeAt(0))
            }
        }
       if(command === `UPPERCASE`) {
        if(el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            sum += Number(el.charCodeAt(0)) 
            } 
        }
    }
    console.log(`The total sum is: ${sum}`);
    }
    valueOfaString(['HelloFromMyAwesomePROGRAM',

    'LOWERCASE'])