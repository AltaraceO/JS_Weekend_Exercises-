function initials(str) {
  ini = [];
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    if (str[i][0]) {
      ini.push(str[i][0].toUpperCase());
    }
  }
  return ini.join(".");
}

console.log(initials("liad raz"));
