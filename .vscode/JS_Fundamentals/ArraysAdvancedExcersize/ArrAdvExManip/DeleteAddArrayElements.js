function delrtrAddArrayElements(){
    let arr = [1,2,3,4,];
    console.log(arr);
    arr.splice(1,1,999,12,13,15);
    // delete 1 element from index 1 and add several new elements!
    console.log(arr);
}
delrtrAddArrayElements()