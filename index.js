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
      `);
    
       choice = readline.question('Enter your choice (1, 2, or 3): ');
    
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
        default:
          console.log("Invalid choice! Please select a valid option.");
          displayMenu(); 
          break;
    }
}
displayMenu()

