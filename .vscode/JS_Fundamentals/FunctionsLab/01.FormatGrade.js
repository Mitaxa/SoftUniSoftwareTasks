function formatGrade(grade) {
    let desc;
    let formatedGrade = grade.toFixed(2);
    if (grade < 3.00) {
        desc = "Fail";
        formatGrade = 2;
        
    } else if (grade < 3.50) {
        
        desc = 'Poor';
        
    } else if (grade < 4.50) {
        desc = "Good"
        
    } else if (grade < 5.50) {
        desc = "Very good";
        
    } else {
        desc ="Excellent";
         
}
console.log(`${desc} ${formatGrade}`);
}
formatGrade(3.5)