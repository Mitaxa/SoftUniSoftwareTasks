function pirates(arr) {
    let commands = arr.shift();
    let targetInfo = {};
   
    while (commands !== 'Sail') {
      let [city, population, gold] = commands.split('||');
      population = Number(population);
      gold = Number(gold);
   
      if (targetInfo.hasOwnProperty(city)) {
        targetInfo[city].size += population;
        targetInfo[city].wealth += gold;
      } else {
        targetInfo[city] = { size: population, wealth: gold };
      }
   
      commands = arr.shift();
    }
   
    let events = arr.shift();
   
    while (events !== 'End') {
      let tokens = events.split('=>');
   
      if (tokens[0] === 'Plunder') {
        plunderFunction(tokens[1], tokens[2], tokens[3]);
      } else if (tokens[0] === 'Prosper') {
        prosperFunction(tokens[1], tokens[2]);
      }
   
      events = arr.shift();
    }
   
    function plunderFunction(town, people, gold) {
      people = Number(people);
      gold = Number(gold);
   
      targetInfo[town].size -= people;
      targetInfo[town].wealth -= gold;
      console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
   
      if (targetInfo[town].size <= 0 || targetInfo[town].wealth <= 0) {
        delete targetInfo[town];
        console.log(`${town} has been wiped off the map!`);
      }
    }
   
    function prosperFunction(town, gold) {
      gold = Number(gold);
   
      if (gold < 0) {
        console.log('Gold added cannot be a negative number!');
      } else {
        targetInfo[town].wealth += gold;
        console.log(`${gold} gold added to the city treasury. ${town} now has ${targetInfo[town].wealth} gold.`);
      }
    }
   
    let settlementCount = Object.keys(targetInfo).length;
   
    if (settlementCount > 0) {
      let nameSort = Object.entries(targetInfo).sort((a, b) => a[0].localeCompare(b[0]));
      let goldSort = nameSort.sort((a, b) => b[1].wealth - a[1].wealth);
   
      console.log(`Ahoy, Captain! There are ${settlementCount} wealthy settlements to go to:`);
   
      for (let input of goldSort) {
        console.log(`${input[0]} -> Population: ${input[1].size} citizens, Gold: ${input[1].wealth} kg`);
      }
    }
  }
  pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End",
    ])