function heroesOfCodeAndLogic(array) {

    let heroesNumber = Number(array.shift());
    let commands = array.slice(heroesNumber);


    let objHeroes = {};

    for (let i = 0; i < heroesNumber; i++) {
        let [heroName, hp, mana] = array[i].split(' ');
        objHeroes[heroName] = { ['health']: Number(hp), ['mana']: Number(mana) }


    }

    for (let i = 0; i < commands.length; i++) {

        let command = commands[i].split(' - ');

        if (command[0] === 'CastSpell') {
            let hero = command[1];
            let manaForSpell = Number(command[2]);
            let spellName = command[3];

            if (objHeroes[hero]) {

                let oldMana = objHeroes[hero]['mana'];
                if (oldMana >= manaForSpell) {
                    objHeroes[hero]['mana'] = oldMana - manaForSpell;
                    console.log(`${hero} has successfully cast ${spellName} and now has ${objHeroes[hero]['mana']} MP!`);

                } else {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                }
            }
        }
        else if (command[0] === 'TakeDamage') {

            let hero = command[1];
            let dmgDone = Number(command[2]);
            let beast = command[3]

            if (objHeroes[hero]) {
                let oldHp = objHeroes[hero]['health']

                if (oldHp - dmgDone > 0) {

                    objHeroes[hero]['health'] = oldHp - dmgDone;
                    console.log(`${hero} was hit for ${dmgDone} HP by ${beast} and now has ${objHeroes[hero]['health']} HP left!`);

                } else {
                    delete objHeroes[hero];
                    console.log(`${hero} has been killed by ${beast}!`);

                }
            }

        } else if (command[0] === 'Recharge') {

            let hero = command[1];
            let mana = Number(command[2]);

            if (objHeroes[hero]) {

                let oldMana = objHeroes[hero]['mana'];
                objHeroes[hero]['mana'] = oldMana + mana;

                if (objHeroes[hero]['mana'] > 200) {
                    objHeroes[hero]['mana'] = 200;
                    let rechargedMana = objHeroes[hero]['mana'] - oldMana

                    console.log(`${hero} recharged for ${rechargedMana} MP!`);

                } else {

                    console.log(`${hero} recharged for ${mana} MP!`);
                }
            }
        } else if (command[0] === 'Heal') {
            let hero = command[1];
            let healthRecovered = Number(command[2]);

            if (objHeroes[hero]) {

                let oldHp = objHeroes[hero]['health'];
                objHeroes[hero]['health'] = oldHp + healthRecovered;

                if (objHeroes[hero]['health'] > 100) {
                    objHeroes[hero]['health'] = 100;

                    let rechargedHealth = objHeroes[hero]['health'] - oldHp
                    console.log(`${hero} healed for ${rechargedHealth} HP!`);

                } else {
                    console.log(`${hero} healed for ${healthRecovered} HP!`);

                }
            }
        }
        else if (command[0] === 'End') {


            let sortedHeroes = Object.entries(objHeroes).sort((a, b) => {

                let firstHero = Object.values(a[1])
                let secondHero = Object.values(b[1])

                if (secondHero[0] - firstHero[0] != 0) {
                    return secondHero[0] - firstHero[0];
                }else{
                    return a[0].localeCompare(b[0])
                }})
            
                sortedHeroes.forEach(hero=>{
                    console.log(`${hero[0]}`);
                    let result = Object.entries(hero[1])
                    console.log(`  HP: ${result[0][1]}`);
                    console.log(`  MP: ${result[1][1]}`);
          
                })

        }
    }

}
heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])