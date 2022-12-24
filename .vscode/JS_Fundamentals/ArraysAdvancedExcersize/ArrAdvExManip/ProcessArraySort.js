function processArraySort(){
    let arr = [5,1,11,3,100];
    let sortedArray = arr.sort(function(a,b){
        return a - b;
    });
    console.log(sortedArray);
}
processArraySort()