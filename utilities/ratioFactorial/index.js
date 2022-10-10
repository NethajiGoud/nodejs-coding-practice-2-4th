let ratioOfTwoNumbers = require("../ratio/index.js");
let factorialOfNumber = require("../factorial/index.js");

module.exports = function ratioAndFactorial(num1, num2, num3) {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorialOfNumber(num3);
  let c = {
    ratio: ratio,
    factorial: factorial,
  };
  return c;
};
