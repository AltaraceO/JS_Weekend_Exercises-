function mask(num) {
  let lastFour = num.toString().slice(-4);
  let theRest = num.toString().slice(0, -4);
  let hash = [];
  for (let i = 0; i < theRest.length; i++) {
    hash.push("#");
  }
  console.log(theRest);
  console.log(hash);
  return hash.join("") + lastFour;
}

console.log(mask(22));
console.log(mask(111111111113322));
