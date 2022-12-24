function loadingBar(number){
    let compleated = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 -compleated.length);
    if (incomplete.length === 0){
        console.log('100% Complete!');
        
    } else {
        console.log(`${number}% [${compleated}${incomplete}]`);
        console.log('Still loading...');
    }
    
}
dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")