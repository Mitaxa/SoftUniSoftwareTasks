function processArraySort(){
    let arr = ['bbb','aaa','ccc'];
    let sortedArray = arr.sort(function(a,b){
        return a.localeCompare(b);
    });

    console.log(sortedArray);

}
processArraySort()