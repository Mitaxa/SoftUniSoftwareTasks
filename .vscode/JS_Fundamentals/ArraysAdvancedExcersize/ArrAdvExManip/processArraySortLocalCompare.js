function processArraySortLocalCompare() {
    let arr = ['bb', 'a', 'ccc'];
// сортира масива по азбучен ред!    
    let sortedArray = arr.sort(function(a,b){
        return a.localeCompare(b);
    });
    console.log(sortedArray);

}
processArraySortLocalCompare()