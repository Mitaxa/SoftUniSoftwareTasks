function worldSwimmingRecord(input) {
    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let mPerSeconds = Number(input[2]);
    let totalSeconds = distance * mPerSeconds;
    let lateTime = (Math.floor(distance / 15) * 12.5);
    let totalTime = totalSeconds + lateTime;
    console.log(lateTime, " ", totalTime)
    if (recordTime <= totalTime) {
        timeDifference = totalTime - recordTime;
        console.log(`No, he failed! He was ${timeDifference.toFixed(2)} seconds slower.`);
    } else {
        timeDifference = recordTime - totalTime;
        console.log(`Yes, he succeeded! The new world record is ${timeDifference.toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"])