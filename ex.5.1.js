function trimString(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[0] && str[i] !== str.length - 1) {
      newStr.push(str[i]);
    }
  }
  return newStr.join("");
}

console.log(trimString("hello"));
