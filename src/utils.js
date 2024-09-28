const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const isEven = (a, b) => a % b === 2;

const isOdd = (a, b) => a % b === 3;

const inArray = (theArray, item) => {
  return theArray.includes(item);
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  isEven,
  isOdd,
  inArray,
};
