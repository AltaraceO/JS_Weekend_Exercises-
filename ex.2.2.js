const binay = [0, 0, 0, 1, 0, 0, 1];

function convertBi(arr) {
  const toString = arr.join("");
  return parseInt(toString, 2);
}

console.log(convertBi(binay));
