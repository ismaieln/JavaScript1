// (1) function to convert the age
function calculateDogAge(itsAge) {
  let dogAge = "Your doggie is " + itsAge * 7 + " years old in dog years!";
  return dogAge;
}
// (2) call the function 3 times
for (let i = 1; i <= 3; i++) {
  console.log(calculateDogAge(i));
}
