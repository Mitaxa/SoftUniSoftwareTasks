function workout(input) {
let index = 0;
let numDays = Number(input[index]);
index++;
let firstDayDistance = Number(input[index]);
let totalDistance = firstDayDistance;
let dayDistance = firstDayDistance;
console.log(firstDayDistance);
index++;
for (i = 2; i <= (numDays + 1); i++ ) {
    let percentageAdded = Number(input[i]);
    dayDistance = dayDistance + ((percentageAdded/100) * dayDistance);
    console.log(dayDistance);
    totalDistance = totalDistance + dayDistance;
}
if (totalDistance >= 1000) {
    let excDistance = totalDistance - 1000;
    console.log(`You've done a great job running ${Math.ceil(excDistance)} more
    kilometers!`);
}
else {
    let needDistance = 1000 - totalDistance;
    console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(needDistance)} more kilometers`);
}
}
workout(["4",
"100",
"30",
"50",
"60",
"80"])