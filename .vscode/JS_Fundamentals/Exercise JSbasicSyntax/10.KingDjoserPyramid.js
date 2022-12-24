function kingDjoserPyramid(base, increment) {
    let stone = 0;
    let marbel = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let i = base;
    let finalHaight = 0;
    while ( i >= 2) {
        for ( i = base; i >= 1; i--) {
            if (i % 5 === 0) {
                lapisLazuli += ((2 * i) + 2 * (i - 2)) * increment;
                stone += (i-2) * (i-2) * increment;
            } else if (i >= 2 ) {
                marbel += ((2 * i) + 2 * (i - 2)) * increment;
                stone += (i-2) * (i-2) * increment;
            } else gold = i * i * increment;
            finalHaight += increment;
        }
    }
    stone = Math.ceil(stone);
    console.log(`Stone required: ${stone}`);
    marbel = Math.ceil(marbel);
    console.log(`Marble required: ${marbel}`);
    lapisLazuli = Math.ceil(lapisLazuli);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    gold = Math.ceil(gold);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${Math.floor(finalHaight)}`);
}
kingDjoserPyramid([11, 1])