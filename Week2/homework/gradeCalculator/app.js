const mark = document.querySelector("#markInput");
const fullMark = document.querySelector("#fullMarkInput");
const per = document.getElementById("percentageOutput");
const gr = document.getElementById("gradeOutput");

function doPrint(pg, gd) {
  per.innerHTML = pg + "%";
  gr.innerHTML = gd;
}

function calcGrade(m, f) {
  let percentage = Math.round((10000 * m) / f) / 100;
  let grade;
  if (percentage >= 90 && percentage <= 100) {
    grade = "A";
    gr.className = "green";
  } else if (percentage >= 80 && percentage <= 89) {
    grade = "B";
    gr.className = "teal";
  } else if (percentage >= 70 && percentage <= 79) {
    grade = "C";
    gr.className = "blue";
  } else if (percentage >= 60 && percentage <= 69) {
    grade = "D";
    gr.className = "yellow";
  } else if (percentage >= 50 && percentage <= 59) {
    grade = "E";
    gr.className = "orange";
  } else if (percentage >= 0 && percentage <= 49) {
    grade = "F";
    gr.className = "red";
  } else {
    grade = "wrong input";
  }
  doPrint(percentage, grade);
}
function submit() {
  calcGrade(mark.value, fullMark.value);
}
