// to check the length of the input
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
//to check if ther is else than digit
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

// to check the same digits if
function isAllSameDigit(str) {
  let f = false;
  for (let i = 0; i < str.length; i++) {
    for (let index = i + 1; index < str.length; index++) {
      if (str[i] !== str[index]) {
        f = true;
        break;
      }
    }
  }
  if (f) {
    isLastDigitEven(str);
  } else {
    console.log(
      "Invalid! the input " +
        str +
        " should contain at least 2 different type of digits!"
    );
    return false;
  }
}

// to check the last digit
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

// to check the summary if greater than 16
function isTheSumgreaterThanSixteen(summ) {
  let sum = 0;
  let k = false;
  for (let y = 0; y < summ.length; y++) {
    sum += parseInt(summ[y]);
    if (sum > 16) {
      k = true;
      break;
    }
  }
  if (k) {
    console.log(
      "Success! The input " + summ + " is a valid credit card number!"
    );
    return true;
  } else {
    console.log(
      "Invalid! the summry of all digit of the input " +
        summ +
        " should be more than 16!"
    );
    return false;
  }
}

let theNumber = "8888888888888868";
validateTheLength(theNumber);
