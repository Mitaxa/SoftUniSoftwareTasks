function lunchBreak(input) {
    let serialName = input[0];
    let episodTime = Number(input[1]);
    let restTime = Number(input[2]);
    const lunchTime = 1 / 8 * restTime;
    const rest = 1 / 4 * restTime;
    let timeDifference = 0;
    let freeTime = restTime - lunchTime - rest;
    if ( freeTime >= episodTime) {
        timeDifference = Math.ceil(freeTime - episodTime);
        console.log(`You have enough time to watch ${serialName} and left with ${timeDifference} minutes free time.`);
    } else {
        timeDifference = Math.ceil(episodTime -freeTime);
        console.log(`You don't have enough time to watch ${serialName}, you need ${timeDifference} more minutes.`);
    }
}
lunchBreak(["Teen Wolf", "48", "60"])