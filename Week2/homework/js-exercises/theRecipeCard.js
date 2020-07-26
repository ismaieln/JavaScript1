// (1) delare a variable contain empty object
let cardOne = {};

// (2) add properties to the object
cardOne.title = "Omelette";
cardOne.servings = 2;
cardOne.ingredients = [" 4 eggs", " 2 strips of bacon", " 1 tsp salt/pepper"];
let help = ["Meal name: ", "Serves: ", "Ingredients: "];

for (let i = 0; i < 3; i++) {
  console.log(help[i] + Object.values(cardOne)[i]);
}
