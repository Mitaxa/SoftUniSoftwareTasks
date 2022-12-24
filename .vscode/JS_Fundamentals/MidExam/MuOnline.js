function muOnline(input = []) {
    function potion(value) {
      return (initialHealth += value);
    }
    function chest(value) {
      return (bitcoins += value);
    }
    function monster(value) {
      return (initialHealth -= value);
    }
   
    let rooms = input.shift().split("|");
    let bitcoins = 0;
    let initialHealth = 100;
    let bestRoom = 0;
   
    while (rooms.length !== 0) {
      let room = rooms.shift().split(" ");
   
      switch (room[0]) {
        case "chest":
          bestRoom++;
          chest(Number(room[1]));
          console.log(`You found ${room[1]} bitcoins.`);
          break;
        case "potion":
          bestRoom++;
          if (initialHealth + Number(room[1]) > 100) {
            console.log(`You healed for ${100 - initialHealth} hp.`);
            initialHealth = 100;
          } else {
            potion(Number(room[1]));
            console.log(`You healed for ${+room[1]} hp.`);
          }
          console.log(`Current health: ${initialHealth} hp.`);
   
          break;
        default:
          bestRoom++;
   
          monster(Number(room[1]));
          if (initialHealth <= 0) {
            console.log(`You died! Killed by ${room[0]}.`);
            console.log(`Best room: ${bestRoom}`);
            return;
          } else {
            console.log(`You slayed ${room[0]}.`);
          }
          break;
      }
    }
   
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${initialHealth}`);
  }
  muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")