// Short way of exporting functions to another files
exports.operation = (a, b) => {
  return a - b;
};

// Short way of exporting arrow functions and we will use DESTRUCTURING to simplify our code
exports.multipleAddition = (x, y, z) => x + y + z;
exports.exponential = (num, num2) => num ** num2;
