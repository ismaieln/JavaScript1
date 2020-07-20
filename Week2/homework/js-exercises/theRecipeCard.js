// (1) delare a variable contain empty object
let howToMakeOmelette = {};

// (2) add properties to the object
howToMakeOmelette.title = "Omelette";
howToMakeOmelette.servings = 2;
howToMakeOmelette.ingredients = [
  "4 eggs",
  "2 strips of bacon",
  "1 tsp salt/pepper",
];
// for (let i = 0; i > 3; i++) {
//   console.log(howToMakeOmelette[i]);
// }
for (const [key, value] of Object.entries(howToMakeOmelette)) {
  console.log(`${key}: ${value}`);
}
