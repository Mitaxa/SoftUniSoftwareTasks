function schoolRegister(input) {
    let arr = [];
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let [studentName, grade, averageScore] = input[i].split(', ')
        studentName = studentName.split(': ').pop();
        grade = Number(grade.split(': ').pop());
        averageScore = Number(averageScore.split(': ').pop());
        obj[studentName] = {
            grade,
            averageScore,
        }
 
    }
    for (const name in obj) {
        if (obj[name].averageScore > 3) {
            arr.push([name, obj[name].grade, obj[name].averageScore]);
        }
    }
    arr.sort((a, b) => a[1] - b[1]);
 
 
    let currentGrade = 0;
    let students = [];
    let studentsCurrentGrade = 0;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        let studentGrade = arr[j][1];
        if (currentGrade === 0) {
            currentGrade = studentGrade;
        }
        if (studentGrade === currentGrade) {
            students.push(arr[j][0]);
            sum += arr[j][2];
            studentsCurrentGrade++;
            if (j === arr.length - 1) {
                let avgScore = sum / studentsCurrentGrade;
                console.log(`${currentGrade + 1} Grade`);
                console.log(`List of students: ${students.join(', ')}`);
                console.log(`Average annual score from last year: ${avgScore.toFixed(2)}\n`);
               
            }
        } else {
            let avgScore = sum / studentsCurrentGrade;
            console.log(`${currentGrade + 1} Grade`);
            console.log(`List of students: ${students.join(', ')}`);
            console.log(`Average annual score from last year: ${avgScore.toFixed(2)}\n`);
            // console.log();
            currentGrade = studentGrade;
            students = [];
            sum = 0;
            avgScore = 0;
            studentsCurrentGrade = 0;
            j--;
        }
 
    }
}
schoolRegister(['Student name: George, Grade: 5, Graduated with an average score: 2.75',
 'Student name: Alex, Grade: 9,
 Graduated with an average score: 3.66',
 'Student name: Peter, Grade: 8,
 Graduated with an average score: 2.83',
 'Student name: Boby, Grade: 5,
 Graduated with an average score: 4.20',
 'Student name: John, Grade: 9,
 Graduated with an average score: 2.90',
 'Student name: Steven, Grade: 2,
 Graduated with an average score: 4.90',
 'Student name: Darsy, Grade: 1,
 Graduated with an average score: 5.15'])