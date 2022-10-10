let ratioOfTwoNumbers = require("../ratio/index.js");
let factorial = require("../factorial/index.js");

module.exports = function ratioAndFactorial(num1, num2, num3) {
  let two_numbers = ratioOfTwoNumbers(num1, num2);
  let one_number = factorialOfNumber(num3);
  let c = {
    ratio: two_numbers,
    factorial: one_number,
  };
  return c;
};
