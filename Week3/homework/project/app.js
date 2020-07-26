// 0
function check() {
  let theNumber = document.querySelector("#digitInput").value;
  let theMessage = document.querySelector("#status");
  let theColor = document.getElementById("status");

  // to check the length
  if (theNumber.length == 16) {
    //if the number all digit
    let doTest = theNumber.match(/[^0-9]/g);
    if (doTest == null) {
      // if the number has at least two different digit
      let f = 0;
      let i;
      let index;
      for (i in theNumber) {
        for (index in theNumber) {
          if (theNumber[index] !== theNumber[i]) {
            f++;
          }
        }
        if (f !== 0) {
          // to check the last digit is even

          if (theNumber.charAt(15) % 2 == 0) {
            // to check the summary of all digits greater than 16
            let sum = 0;
            let y;
            for (y in theNumber) {
              sum += parseInt(theNumber[y]);
            }
            if (sum > 16) {
              theMessage.innerHTML =
                "Success! The input " +
                theNumber +
                " is a valid credit card number!";
              theColor.className = "blue";
              return theNumber;
            } else {
              theMessage.innerHTML =
                "Invalid! the sum of all digit of the input " +
                theNumber +
                " should be more than 16!";
              theColor.className = "red";
              return theNumber;
            }
          } else {
            theMessage.innerHTML =
              "Invalid! the input " +
              theNumber +
              " should contain the last digit even!";
            theColor.className = "red";
            return theNumber;
          }
        } else {
          theMessage.innerHTML =
            "Invalid! the input " +
            theNumber +
            " should contain at least 2 different type of digits!";
          theColor.className = "red";
          return theNumber;
        }
      }
    } else {
      theMessage.innerHTML =
        "Invalid! the input " + theNumber + " should contain all digits!";
      theColor.className = "red";
      return theNumber;
    }
  }

  // the number less/more 16 digit
  else {
    theMessage.innerHTML =
      "Invalid! the input " + theNumber + " should contain 16 digits!";
    theColor.className = "red";
    return theNumber;
  }
}
