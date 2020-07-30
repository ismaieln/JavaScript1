// (1) create an array
let shoppingCart = ["bananas", " milk"];

let b = [" fig", " tea", " waffles"];
for (let i = 0; i < 3; i++) {
  console.log(addToShoppingCart(b[i]));
}

// (2) function
function addToShoppingCart(item) {
  shoppingCart.push(item);
  if (shoppingCart.length > 3) {
    shoppingCart.splice(0, 1);
  }

  return "You bought " + shoppingCart + "!";
}
