// (1) create an object
const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  nuts: 1.23,
  chocolate: 1.64,
  wine: 5.12,
};

// (3) call the function
let printOut = calculateTotalPrice(cartForParty);
console.log(printOut);

// (2) the function
function calculateTotalPrice(fullCart) {
  let aValues = Object.values(fullCart);
  let toatl = 0;
  for (let i in aValues) {
    toatl += aValues[i];
  }
  return "Total: €" + toatl;
}
