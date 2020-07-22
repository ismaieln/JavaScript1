// (1)
let drinkTray = [];

const drinkTypes = ["cola", "lemonade", "water"];

// (2) (3) (4)

let counter = 0;

for (let i = 0; i < 5; i++) {
  //condition to keep the counter les than the array length
  if (counter <= drinkTypes.length) {
    // condition to store the first item
    if (i == 0) {
      drinkTray.push(drinkTypes[counter]);
    } else {
      // only to hold at most two instances of the same drink type
      for (let ii = 0; ii <= i; ii++) {
        if (drinkTray[ii] == drinkTray[i]) {
          counter++;
        } else {
          drinkTray.push(drinkTypes[counter]);
        }
      }
    }
  } else {
    counter = 0;
  }
}

// (5)
let counts = "Hey guys, I brought a ";

for (let index = 0; index < 5; index++) {
  if (index == 4) {
    counts += drinkTray[index] + "!";
  } else {
    counts += drinkTray[index] + ", ";
  }
}
console.log(counts);
