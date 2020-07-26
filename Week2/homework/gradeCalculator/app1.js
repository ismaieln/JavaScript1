// declare variables
let mark = 43;
let fullMark = 60;

// function to calculate the percentage and chose the grade
function calcGrade(m, f) {
  let percentage = Math.round((10000 * m) / f) / 100;
  let grade;
  if (percentage >= 90 && percentage <= 100) {
    grade = "A";
  } else if (percentage >= 80 && percentage < 90) {
    grade = "B";
  } else if (percentage >= 70 && percentage < 80) {
    grade = "C";
  } else if (percentage >= 60 && percentage < 70) {
    grade = "D";
  } else if (percentage >= 50 && percentage < 60) {
    grade = "E";
  } else if (percentage >= 0 && percentage < 50) {
    grade = "F";
  }
  console.log("Yuo got a " + grade + " (" + percentage + "%)!");
}

// call the function
calcGrade(mark, fullMark);
