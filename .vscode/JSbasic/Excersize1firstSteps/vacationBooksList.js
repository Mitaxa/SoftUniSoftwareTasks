function vacationBooksList(input) {
    let currBookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysNumber = Number(input[2]);
    let hoursPerDay = (currBookPages / pagesPerHour) / daysNumber;
    console.log(hoursPerDay);
}
vacationBooksList(["212", "20", "2"])