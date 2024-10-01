const readline=require('readline-sync') 
let student=[
    { roll_no: 101, name: "Rohan Nair", class: 2, gender: "Male", test_score: [] },
    { roll_no: 102, name: "Sai Mishra", class: 4, gender: "Male", test_score: [] },
    { roll_no: 103, name: "Kavya Kumar", class: 4, gender: "Female", test_score: [] },
    { roll_no: 104, name: "Gaurav Mishra", class: 3, gender: "Female", test_score: [] },
    { roll_no: 105, name: "Dev Bhatia", class: 1, gender: "Male", test_score: [] },
    { roll_no: 106, name: "Anika Bhatia", class: 4, gender: "Male", test_score: [] },
    { roll_no: 107, name: "Tara Gupta", class: 2, gender: "Male", test_score: [] },
    { roll_no: 108, name: "Sai Bhatia", class: 5, gender: "Male", test_score: [] },
    { roll_no: 109, name: "Rahul Singh", class: 4, gender: "Male", test_score: [] },
    { roll_no: 110, name: "Anjali Jain", class: 4, gender: "Female", test_score: [] },
    { roll_no: 111, name: "Tara Sharma", class: 3, gender: "Male", test_score: [] },
    { roll_no: 112, name: "Tara Joshi", class: 3, gender: "Male", test_score: [] },
    { roll_no: 113, name: "Aryan Singh", class: 2, gender: "Female", test_score: [] },
    { roll_no: 114, name: "Rohan Mishra", class: 5, gender: "Female", test_score: [] },
    { roll_no: 115, name: "Rohan Nair", class: 2, gender: "Male", test_score: [] },
    { roll_no: 116, name: "Nisha Kapoor", class: 2, gender: "Male", test_score: [] },
    { roll_no: 117, name: "Sai Saxena", class: 5, gender: "Male", test_score: [] },
    { roll_no: 118, name: "Aarav Mishra", class: 1, gender: "Male", test_score: [] },
    { roll_no: 119, name: "Krish Kapoor", class: 3, gender: "Male", test_score: [] },
    { roll_no: 120, name: "Shreya Gupta", class: 2, gender: "Female", test_score: [] },
    { roll_no: 121, name: "Sai Gupta", class: 3, gender: "Female", test_score: [] },
    { roll_no: 122, name: "Arjun Chandra", class: 3, gender: "Male", test_score: [] },
    { roll_no: 123, name: "Anjali Saxena", class: 1, gender: "Male", test_score: [] },
    { roll_no: 124, name: "Tara Gupta", class: 3, gender: "Male", test_score: [] },
    { roll_no: 125, name: "Aditya Chauhan", class: 2, gender: "Female", test_score: [] },
    { roll_no: 126, name: "Aditya Bhatia", class: 2, gender: "Female", test_score: [] },
    { roll_no: 127, name: "Anjali Mishra", class: 4, gender: "Male", test_score: [] },
    { roll_no: 128, name: "Nisha Sharma", class: 1, gender: "Male", test_score: [] },
    { roll_no: 129, name: "Nisha Saxena", class: 1, gender: "Female", test_score: [] },
    { roll_no: 130, name: "Dev Saxena", class: 2, gender: "Male", test_score: [] }
]
  
// let choice;
function displayMenu(){
    console.log(`
        ****Display Menu****\n
        1) Take Test
        2) View Result
        3) View Students Result
        4) View classwise result
        5) Detail Analysis of Result
        6) View Top Three performer classwise
      `);
    
       choice = readline.question('Enter your choice (1, 2, 3, 4, 5 or 6): ');
    
      switch(choice) {
        case '1':
          console.log("You selected: Take Test");
          handleTakeTest()
          break;
        case '2':
          console.log("You selected: View Result");
          handleGenerateResult()
          break;
        case '3':
          console.log("You selected: View Students Result");
          handleViewResult()
          break;
        case '4':
          console.log("You selected: View Classwise Result");
          handleViewClasswiseResult()
          break;
        case '5':
            console.log("You selected: View Detail Analysis of Result");
            //handleDetailAnalysisResult()
            handleDetailAnalysisResult()
            break;
        default:
          console.log("Invalid choice! Please select a valid option.");
          displayMenu(); 
          break;
    }
}
displayMenu()

function randomMark(){
    return Math.floor(Math.random()*100)
}

let subject=["Math","physics","chemistry"]

function handleTakeTest(){
    let subject=["Math","physics","chemistry"]
    for(let i=0;i<student.length;i++){
        let testScores = [];
        for (let j = 0; j < subject.length; j++) {
            let score = randomMark();  
            let obj = { [subject[j]]: score };  
            testScores.push(obj);
        }
       student[i].test_score.push(...testScores)
    }
     console.log(student);
    displayMenu()
}

var total_mark=0
var percentage=0


function handleGenerateResult(){
    if(student[0].test_score.length==0){
        console.log("To View Result, First you have to take Test");
        displayMenu() 
    }
    else{
        for(let i=0;i<student.length;i++){
                total_mark=student[i].test_score[0].Math + student[i].test_score[1].physics + student[i].test_score[2].chemistry
                student[i].total_mark=total_mark
                percentage=Math.floor(total_mark/3);
                student[i].percentage=percentage
        }
 
    }
    console.log(student);
    displayMenu()
}


function handleViewResult(){
    if(student[0].total_mark){
console.log(`
+----------+--------------------+---------+----------------+------------+
| roll_no  |        Name        |  class  |  Total Marks   | Percentage |
+----------+--------------------+---------+----------------+------------+`);
            
        student.forEach(stu => {
            console.log(`| ${String(stu.roll_no).padEnd(8)} | ${stu.name.padEnd(18)} | ${String(stu.class).padEnd(7)} | ${String(stu.total_mark).padEnd(14)} | ${String(stu.percentage).padEnd(10)} |`);
        });
        console.log("+----------+--------------------+---------+----------------+------------+");
        displayMenu()
    }
    else{
         console.log("To generate result, first you have to take test");
         displayMenu()    
    }
}

function  handleViewClasswiseResult(){
    if(student[0].total_mark){
        let classNo= readline.question('which class Result you want to see(1 to 5): ');
        if(classNo>=1 && classNo<=5){
            console.log(`
+----------+--------------------+---------+----------------+------------+
| roll_no  |        Name        |  class  |  Total Marks   | Percentage |
+----------+--------------------+---------+----------------+------------+`
                        );
                                
                            student.forEach(stu => {
                                if(stu.class==classNo){
                                    console.log(`| ${String(stu.roll_no).padEnd(8)} | ${stu.name.padEnd(18)} | ${String(stu.class).padEnd(7)} | ${String(stu.total_mark).padEnd(14)} | ${String(stu.percentage).padEnd(10)} |`);
                                } 
                            });
                            console.log("+----------+--------------------+---------+----------------+------------+");
                        }
                    else{
                        console.log("Wrong choice !!! Try Again"); 
                    }
        }
        
        else{
             console.log("To generate result, first you have to take test");
             displayMenu()    
        }
        displayMenu()
}





// ----------------------------------UC4------------------------------------

function handleDetailAnalysisResult(){
    const classResults = {};

  // Group students by class
  student.forEach((stu) => {
    const studentClass = stu.class;

    // Initialize if the class is not present in classResults
    if (!classResults[studentClass]) {
      classResults[studentClass] = {
        totalStudents: 0,
        totalMarks: 0,
        totalPercentage: 0,
        failedCount: 0,
      };
    }

    // Update class statistics
    classResults[studentClass].totalStudents++;
    classResults[studentClass].totalMarks += stu.total_mark;
    classResults[studentClass].totalPercentage += stu.percentage;

    // Check if the student failed (assuming pass mark is 40%)
    if (stu.percentage < 40) {
      classResults[studentClass].failedCount++;
    }
  });

  console.log(`
+-------+--------------+------------------+--------------+-------+------------+------------+-------------+----------+
| Class | Total_student| Avg. total_marks | Avg. perc(%) | grade | fail count |fail count %| passed count| passed % |
+-------+--------------+------------------+--------------+-------+------------+------------+-------------+----------+`
                );


  // Process each class and calculate the statistics
  for (const studentClass in classResults) {
    const result = classResults[studentClass];
    const totalStudents = result.totalStudents;
    const failedCount = result.failedCount;
    const passedCount = totalStudents - failedCount;

    // Calculate average total marks and average percentage
    const avgTotalMarks = result.totalMarks / totalStudents;
    const avgPercentage = result.totalPercentage / totalStudents;

    // Determine overall grade for the class based on average percentage
    let overallGrade = '';
    if (avgPercentage >= 90) {
      overallGrade = 'A+';
    } else if (avgPercentage >= 80) {
      overallGrade = 'A';
    } else if (avgPercentage >= 70) {
      overallGrade = 'B';
    } else if (avgPercentage >= 60) {
      overallGrade = 'C';
    } else {
      overallGrade = 'D';
    }

    // Calculate failed and passed student percentages
    const failedPercentage = (failedCount / totalStudents) * 100;
    const passedPercentage = 100 - failedPercentage;

 console.log(`|${studentClass.padEnd(7)}|  ${String(totalStudents).padEnd(11)} |  ${String(avgTotalMarks.toFixed(2)).padEnd(15)} | ${String(avgPercentage.toFixed(2)).padEnd(12)} | ${String(overallGrade).padEnd(5)} | ${String(failedCount).padEnd(11)}| ${String((failedPercentage.toFixed(2)).padEnd(10))} |  ${String(passedCount).padEnd(10)} | ${String((passedPercentage.toFixed(2))).padEnd(8)} | `);
  }
  console.log("+-------+--------------+------------------+--------------+-------+------------+------------+-------------+----------+");

  displayMenu()
}

