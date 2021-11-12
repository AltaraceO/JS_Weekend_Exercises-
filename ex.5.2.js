function stringRepeat(n, str) {
  let newStr = [];
  for (let i = 0; i < n; i++) {
    newStr.push(str);
  }
  return newStr.join("");
}

console.log(stringRepeat(3, "hello"));
