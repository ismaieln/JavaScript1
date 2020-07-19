// (1) declare a variable and assign strings to it
let myString = "hello,this,is,a,difficult,to,read,sentence";

// (2) log the length
console.log(myString.length);

// (3) search a web to find the way to remove the commas
let i = /,/g;
myString = myString.replace(i, " ");

// (4) log mystrings
console.log(myString);
