function copyArrayOrPartOfIt(){
    let arr = [1,2,3,4,];
    let arr1 = [];
    let arr2 = [];
    arr1 = arr.slice(0);//copy whole array-->arr
    arr2 = arr.slice(0,2); //copy arr elements from index 0 to index 2 exclusive
    arr.splice(1, 1, 8,9,15)// delete 1 element from index 1 and add several new elements 8, 9, 15!
    console.log(arr1);
    console.log(arr2);
    console.log(arr);
}
copyArrayOrPartOfIt()