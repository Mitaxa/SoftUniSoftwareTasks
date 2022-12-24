function meetings(input) {
    let arrForOutput = {};

    for (let line of input) {
        let [weekday, name] = line.split(' ');

        if (arrForOutput.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            arrForOutput[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let day in arrForOutput) {
        console.log(`${day} -> ${arrForOutput[day]}`);
    }
}
meetings(['Monday Peter', 'Wednsday Bill',
 'Monday Tim', 'Friday Tim'])