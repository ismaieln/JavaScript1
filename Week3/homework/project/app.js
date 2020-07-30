// 0
function check() {
  let theNumber = document.getElementById("digitInput").value;
  let theMessage = document.getElementById("status");

  // to check the length
  if (theNumber.length == 16) {
    //if the number all digit
    if (!isNaN(theNumber)) {
      // if the number has at least two different digit
      let f = false;
      for (let i = 0; i < theNumber.length; i++) {
        for (let index = i + 1; index < theNumber.length; index++) {
          if (theNumber[i] !== theNumber[index]) {
            f = true;
            break;
          }
        }
        if (f) {
          // to check the last digit is even
          if (theNumber.charAt(15) % 2 == 0) {
            // to check the summary of all digits greater than 16
            let sum = 0;
            let y;
            let k = false;
            for (y in theNumber) {
              sum += parseInt(theNumber[y]);
              if (sum > 16) {
                k = true;
                break;
              }
            }
            if (k) {
              theMessage.innerHTML =
                "Success! The input " +
                theNumber +
                " is a valid credit card number!";
              theMessage.className = "blue";
            } else {
              theMessage.innerHTML =
                "Invalid! the summary of all digit of the input " +
                theNumber +
                " should be more than 16!";
              theMessage.className = "red";
            }
          } else {
            theMessage.innerHTML =
              "Invalid! the input " +
              theNumber +
              " should contain the last digit even!";
            theMessage.className = "red";
          }
        } else {
          theMessage.innerHTML =
            "Invalid! the input " +
            theNumber +
            " should contain at least 2 different type of digits!";
          theMessage.className = "red";
        }
      }
    } else {
      theMessage.innerHTML =
        "Invalid! the input " + theNumber + " should contain all digits!";
      theMessage.className = "red";
    }
  }
  // the number less/more 16 digit
  else {
    theMessage.innerHTML =
      "Invalid! the input " + theNumber + " should contain 16 digits!";
    theMessage.className = "red";
  }
}
