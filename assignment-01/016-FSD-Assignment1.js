const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("num1: ", function (num1) {
  // TODO: Log the answer in a database
  rl.question("num2: ", function (num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log("");
    console.log("Sum : " + (num1 + num2));
    console.log("Difference : " + (num1 - num2));
    console.log("Product : " + num1 * num2);
    console.log("Quotient : " + num1 / num2);
    console.log("Remainder : " + (num1 % num2));
    console.log("Value of num1 after increment : " + ++num1);
    console.log("Value of num2 after decrement : " + --num2);

    rl.close();
  });
});
