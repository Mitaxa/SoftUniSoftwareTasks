function arrayManipulator(nums, commands) {
    let newArray = [];
    
    for (let i = 0; i < commands.length; i++){
    let currentValues = commands[i].split(' ');
    let currentCommand = currentValues.shift();//Реже първите стойности от масива, които са команди
    currentValues = currentValues.map(Number);//превръща стойностите в масива от символи в числа
    let sumPairs = 0;
    let pairsOfSumNums = [];
    switch(currentCommand){
        case "add":
            let indexToAdd = currentValues[0];
            let elementToAdd = currentValues[1];
            nums.splice(indexToAdd,0,elementToAdd);//Маха на дадения индекс 0 ел. и 
            //добавя 1 ел. elementToAdd
    // delete 1 element from index 1 and add several new elements!
        break;
        case "addMany":
            let indexToAddMany = currentValues.shift();
            nums.splice(indexToAddMany, 0, ...currentValues);//използваме spread оператора!
        break;
        case "contains": 
            console.log(nums.indexOf(currentValues[0]));
        break;
        case "remove": 
            let indexToRemove = currentValues[0];
            nums.splice(indexToRemove,1);
        break;
        case "shift":
           for (let i = 0; i < currentValues[0]; i++) {
            nums.push(nums.shift());
           }
        break;
        case "sumPairs": 
           if (nums.length % 2 !== 0) {
            nums.push(0);
           }
           for (let i = 0; i < nums.length; i+=2) {
            sumPairs = nums[i] + nums[i+1];
            pairsOfSumNums.push(sumPairs);
           }
           nums = [...pairsOfSumNums];
        break;
        case "print": 
           console.log(`[ ${nums.join(', ')} ]`);
        break;
    }
}
}
arrayManipulator([1, 2, 4, 5, 6, 7], 
                 ['add 1 8', 'contains 1', 'contains 3', 'print'])
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5',
     'contains 15', 'remove 3',
     'shift 1', 'print'])