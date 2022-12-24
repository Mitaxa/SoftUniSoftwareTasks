function train(arr){
    let passengersInTheTrainArr = arr.shift().split(' ').map(Number);
    let maxCapacity = +arr.shift(); // знака + parce to Number maxCapacity на вагона
    for (let i = 0; i < arr.length; i++){
        let commandNum = arr[i].split(' ');
        if (commandNum[0] === 'Add'){
            passengersInTheTrainArr.push(Number(commandNum[1]));
        } else {
            for (let a = 0; a < passengersInTheTrainArr.length; a++){
                if (Number(commandNum[0]) + passengersInTheTrainArr[a] <= maxCapacity){
                    passengersInTheTrainArr[a] += Number(commandNum[0]);
                    break;
                }
            }
        }
        
    }
    console.log(passengersInTheTrainArr.join(' '));
}
train(['32 54 21 12 4 0 23', '75',
'Add 10', 'Add 0', '30', '10', '75'])