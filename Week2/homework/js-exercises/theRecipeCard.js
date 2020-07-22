// (1) delare a variable contain empty object
let howToMake = {};

// (2) add properties to the object
howToMake.title = "Omelette";
howToMake.servings = 2;
howToMake.ingredients = [" 4 eggs", " 2 strips of bacon", " 1 tsp salt/pepper"];

console.log("Meal name: " + howToMake.title);
console.log("Serves: " + howToMake.servings);

let counts = "Ingredients:";
let ingCount = howToMake.ingredients.length;

for (let i = 0; i < ingCount; i++) {
  if (i == ingCount - 1) {
    counts += howToMake.ingredients[i] + ".";
  } else {
    counts += howToMake.ingredients[i] + ",";
  }
}
console.log(counts);
