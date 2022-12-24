function lunchBreak(input) {
    const nameSeies = input[0]
    const timeEpisod = Number(input[1])
    const timeBreakAll = Number(input[2])
    let lunchTime = timeBreakAll / 8
    let timeFree = timeBreakAll / 4
    let rest = timeBreakAll - timeFree - timeEpisod - lunchTime
    if (rest >= 0) {
        console.log(`You have enough time to watch ${nameSeies} and left with ${Math.ceil(rest)} minutes free time.`)
    } else {
        rest = rest * (-1)
        console.log(`You don't have enough time to watch ${nameSeies}, you need ${Math.ceil(rest)} more minutes.`)
    }
    }
lunchBreak();    