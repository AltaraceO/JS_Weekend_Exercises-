function crazyCase(str) {
  newStr = [];
  for (let i = 0; i < str.length; i++)
    if (str[i] === " ") {
      newStr.push(" ");
    } else if ([i] % 2 === 0) {
      //   console.log([i]);
      //   console.log(str[i].toUpperCase());
      newStr.push(str[i].toUpperCase());
    } else {
      //   console.log(str[i]);
      newStr.push(str[i].toLowerCase());
    }

  return newStr.join("");
}
console.log(
  crazyCase("arizona psychic hit by car says he never saw it coming")
);
