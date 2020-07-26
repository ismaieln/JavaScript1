function calculateDogAge(itsAge) {
  let dogAge = "Your doggie is " + itsAge * 7 + " uears old in dog years!";

  return dogAge;
}

for (let i = 1; i <= 3; i++) {
  console.log(calculateDogAge(i));
}
