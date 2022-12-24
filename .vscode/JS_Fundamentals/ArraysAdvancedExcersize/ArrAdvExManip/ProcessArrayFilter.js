function processArrayFilter(){
    //filter филтрира елементите на масива по даден критерий.Може да се ползва и filter 
    // по същия начин
    let arr = [1,2,3,4];
    let newArray = arr.map( el => {
        if(el % 2 === 0){
            return el;
        }
    });
    console.log(`Arr:${arr}`);
    console.log(`newArray: ${newArray}`);
}
processArrayFilter()