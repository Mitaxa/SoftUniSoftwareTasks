function inventory(arr) {
    let heroes = [];
    for (let heroInfo of arr) {
        let [name, level, items] = heroInfo.split(' / '); 
        //това е по-новото писане в JS
    
        let currentHero = {
            name: name,
            level: Number(level), // или така level: +level,
            items: items
// С най-новата версия на JS тези 3 реда могат да се напишат така:
// name,
// level: level,
// items
        };
        heroes.push(currentHero);
    } 
    //сортиране по obekt level
    let sortedByLevel = heroes.sort((a,b) => {
        return a.level - b.level;
    })
    for (const hero of sortedByLevel) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword',
 'Hes / 1 / Desolator, Sentinel, Antara'])