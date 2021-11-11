ops = {
  "/": function (x, y) {
    return x / y;
  },
  "*": function (x, y) {
    return x * y;
  },
  "-": function (x, y) {
    return x - y;
  },
  "+": function (x, y) {
    return x + y;
  },
};

function operation(x, val1, val2) {
  return ops[x](val1, val2);
}

console.log(operation("+", 2, 2));
console.log(operation("/", 8, 2));
console.log(operation("*", 8, 2));
console.log(operation("-", 8, 2));
