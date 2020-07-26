//declare four arrays
let numChildren = [3, 2, 0, 3];
let partnerNames = ["Sofi", "Mary", "Nahed", "Salha"];
let locations = ["Eygebt", "Spain", "Syria", "Canada"];
let jobs = ["P.M", "CEO", "president", "Driver"];

// call the function
tellFortune(numChildren, partnerNames, locations, jobs);

//the function
function tellFortune(c, p, l, t) {
  // declare initial array
  let person = [];
  for (let i = 0; i < 4; i++) {
    let y = getRandomNumber();
    switch (i) {
      case 0:
        person.push(t[y]);
        break;
      case 1:
        person.push(l[y]);
        break;
      case 2:
        person.push(p[y]);
        break;
      case 3:
        person.push(c[y]);
      default:
    }
  }
  console.log(
    "You will be a " +
      person[0] +
      " in " +
      person[1] +
      ", married to " +
      person[2] +
      " with " +
      person[3] +
      " kids."
  );
}

// function to pick random number [0 to 3]
function getRandomNumber(som) {
  let ran = Math.random();
  som = Math.floor(ran * 4);
  return som;
}
