function validateTheLength(theNumber) {
  if (theNumber.length == 16) {
    checkAllDigit(theNumber);
    return true;
  } else {
    console.log(
      "Invalid! the input " + theNumber + " should contain 16 digits!"
    );
    return false;
  }
}
function checkAllDigit(noDigit) {
  let globalId = /[^0-9]/g;
  let doTest = noDigit.match(globalId);

  if (doTest == null) {
    isAllSameDigit(noDigit);
    return true;
  } else {
    console.log(
      "Invalid! the input " + noDigit + " should contain all digits!"
    );
    return false;
  }
}

function isAllSameDigit(str) {
  let f = 0;
  for (let i = 0; i < str.length; i++) {
    for (let index = 0; index < str.length; index++) {
      if (str[index] !== str[i]) {
        f++;
      }
    }
    if (f !== 0) {
      isLastDigitEven(str);
      return true;
    } else {
      console.log(
        "Invalid! the input " +
          str +
          " should contain at least 2 different type of digits!"
      );
      return false;
    }
  }
}
function isLastDigitEven(last) {
  let lastDigit = last.charAt(15);
  if (lastDigit % 2 === 0) {
    isTheSumgreaterThanSixteen(last);
    return true;
  } else {
    console.log(
      "Invalid! the input " + last + " should contain the last digit even!"
    );
    return false;
  }
}

function isTheSumgreaterThanSixteen(summ) {
  let sum = 0;
  for (let y = 0; y < summ.length; y++) {
    sum += parseInt(summ[y]);
  }
  if (sum > 16) {
    console.log(
      "Success! The input " + summ + " is a valid credit card number!"
    );
    return true;
  } else {
    console.log(
      "Invalid! the summrize of all digit of the input " +
        summ +
        " should be more than 16!"
    );
    return false;
  }
}

let theNumber = "1111111111100052";
let testNumber = theNumber.toString();
validateTheLength(testNumber);
