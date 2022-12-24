function inventory(arr) {
    let heroes = [];
    for (let heroInfo of arr) {
    //    let [name, level, items] = heroInfo.split(' / '); //това е по-новото
    // това са долните 4 реда ако не ми е ясен синтаксиса на горното!
        let splitedElements = heroInfo.split(' / ');
        let name = splitedElements[0];
        let level = splitedElements[1];
        let items = splitedElements[2];

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