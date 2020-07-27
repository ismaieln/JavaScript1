// (1)
// declare variables
let drinkTray = [];
let keys = [];
let drinkTypes = ["cola", "lemonade", "water"];

// (2) (3) (4)
let max = 2; // to control max number of eatch drink on tray
let temp;

for (let i = 0; i < 5; i++) {
  keys.push(getR());
  temp = keys[i];

  // keep doing until ok
  while (doAgain()) {
    doAgain();
  }
  keys[i] = temp;
}
// to load the drinks on tray
for (let y = 0; y < 5; y++) {
  drinkTray[y] = drinkTypes[keys[y]];
}
// to log the required message
let counts = "Hey guys, I brought a ";

for (let index = 0; index < 5; index++) {
  if (index == 4) {
    counts += drinkTray[index] + "!";
  } else {
    counts += drinkTray[index] + ", ";
  }
}

console.log(counts);

// to bick a random number (0-2)
function getR() {
  return Math.floor(Math.random() * 3);
}
// to check the repeated items
function ifEqual(value) {
  return value == temp;
}
// to change if repeated more than the max
function doAgain() {
  let equalA = keys.filter(ifEqual);
  if (equalA.length > max) {
    temp = getR();
    return true;
  } else {
    return false;
  }
}
