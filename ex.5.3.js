function camelCase(str) {
  let arr = str.split("-");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      // console.log(arr[i][0].toUpperCase());

      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);

      //   console.log(arr[i][0]);
      //   console.log(arr[i]);
    }
  }
  return arr.join("");
}
console.log(camelCase("the-stealth-worrior"));
