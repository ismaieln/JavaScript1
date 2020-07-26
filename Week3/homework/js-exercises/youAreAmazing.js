for (let i = 1; i <= 3; i++) {
  let myName = "Ismaiel";
  giveCompliment(myName);
}

function giveCompliment(aName) {
  let compliments = [
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
  i = getTheNumber(i);
  console.log("You are " + compliments[i] + ", " + aName + "!");
  return true;
}

// this is a function to help get a random number(0 to 9)
function getTheNumber(som) {
  let ran = Math.random();
  som = Math.floor(ran * 10);
  // som is a number between 0 and 9
  return som;
}
