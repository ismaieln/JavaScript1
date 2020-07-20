let c;
// (1) create for loop
for (let i = 0; i < 20; i++) {
  // (2) create condition to check the number
  if (i % 2 == 0) {
    // (3) if it is even
    c = "even";
  } else {
    // (4) if it is odd
    c = "odd";
  }
  console.log("The number " + i + " is " + c);
}
