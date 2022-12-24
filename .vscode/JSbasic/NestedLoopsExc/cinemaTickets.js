function cinemaTickets(input) {
    let index = 0;
    let inputLine = input[index];
    let countStandartTickets = 0;
    let countKidTickets = 0;
    let countStudentTickets = 0;
    while (inputLine !== "Finish") {
        let movieName = inputLine;
        index++;
        let allTickets = Number(input[index]);
        let freeSpaceInTheCinema = allTickets;
        index++;
        let ticketType = input[index];
        while (ticketType !== "End") {
            switch (ticketType) {
              case "standard":
                  countStandartTickets++;
                  break;
              case "kid":
                  countKidTickets++;
                  break;
              case "student":
                  countStudentTickets++;
                  break;
            }
            freeSpaceInTheCinema--;
            if (freeSpaceInTheCinema === 0) {
                break;
            }
            index++;
            ticketType = input[index];
        }
        let boughtTickets = allTickets - freeSpaceInTheCinema;
        let percentegeFull = (boughtTickets / allTickets) * 100;
        console.log(`${movieName} - ${percentegeFull.toFixed(2)}% full.`)
        index++;
        inputLine = input[index];
    }
    let allBoughtTickets = countKidTickets + countStudentTickets + countStandartTickets;
    console.log(`Total tickets: ${allBoughtTickets}`);
    console.log(`${((countStudentTickets / allBoughtTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((countStandartTickets / allBoughtTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((countKidTickets / allBoughtTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])