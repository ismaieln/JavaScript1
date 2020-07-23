// declare variables
let mark = 65;
let fullMark = 70;

// function to calculate the percentage and chose the grade
function calcGrade(m, f) {
  let percentage = Math.round((100 * m) / f);
  let grade;
  if (percentage >= 90 && percentage <= 100) {
    grade = "A";
  } else if (percentage >= 80 && percentage <= 89) {
    grade = "B";
  } else if (percentage >= 70 && percentage <= 79) {
    grade = "C";
  } else if (percentage >= 60 && percentage <= 69) {
    grade = "D";
  } else if (percentage >= 50 && percentage <= 59) {
    grade = "E";
  } else if (percentage >= 0 && percentage <= 49) {
    grade = "F";
  }

  console.log("Yuo got a " + grade + " (" + percentage + "%)!");
}

// call the function
calcGrade(mark, fullMark);
