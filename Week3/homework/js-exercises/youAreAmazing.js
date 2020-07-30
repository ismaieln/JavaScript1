// (2) call the function 3 times
for (let i = 1; i <= 3; i++) {
  let myName = "Ismaiel";
  giveCompliment(myName);
}
// (1) the function
function giveCompliment(aName) {
  const compliments = [
    "great",
    "awesome",
    "smart",
    "nice",
    "amazing",
    "so smart",
    "wonderful",
    "lovely",
    "pretty",
    "the best",
  ];
  let i;
  console.log("You are " + compliments[getTheNumber(i)] + ", " + aName + "!");
  return true;
}

// this is a function to help get a random number(0 to 9)
function getTheNumber(som) {
  som = Math.floor(Math.random() * 10);
  // som is a number between 0 and 9
  return som;
}
