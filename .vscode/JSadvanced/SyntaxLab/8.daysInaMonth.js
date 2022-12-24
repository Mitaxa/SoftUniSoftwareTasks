function daysInaMonth(month, year) {
    function getDaysInCurrentMonth() {
        const date = new Date();
      
        return new Date(
          year,
          month,
          0
        ).getDate();
      }
      
      const result = getDaysInCurrentMonth();
      console.log(result);
}
daysInaMonth(1, 2012)
daysInaMonth(2, 2021)