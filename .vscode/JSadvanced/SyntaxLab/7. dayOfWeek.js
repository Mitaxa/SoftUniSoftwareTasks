function dayOfWeek(str) {
    switch (str) {
        case 'Monday': console.log(1); break;
        case 'Thusday': console.log(2); break;
        case 'Whednsday': console.log(3); break;
        case 'Thursday': console.log(4); break;
        case 'Friday': console.log(5); break;
        case 'Saturday': console.log(6); break;
        case 'Sunday': console.log(7); break;
        default: console.log('error');
    }
}
dayOfWeek('Monday')
dayOfWeek('Friday')
dayOfWeek('Invalid')