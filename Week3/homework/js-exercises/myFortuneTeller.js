// (1) declare four arrays
const numChildren = ["4", "2", "0", "3", "10"];
const partnerNames = ["Sofi", "Mary", "Nahed", "Salha", "Huda"];
const locations = ["Egypt", "Spain", "Syria", "Canada", "Netherland"];
const jobs = ["P.M", "CEO", "president", "Driver", "Actor"];

// (3) call the function 3 times
for (let index = 0; index < 3; index++) {
  console.log(tellFortune(numChildren, partnerNames, locations, jobs));
}

// (2) the function
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
  return (
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

// function to pick random number [0 to 4]
function getRandomNumber(som) {
  som = Math.floor(Math.random() * 5);
  return som;
}
