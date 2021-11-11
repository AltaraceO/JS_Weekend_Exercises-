function century(year) {
  let first = Math.round(year / 100);

  year % 100 !== 0 ? first++ : first;

  return first;
}

console.log(century(1903));
console.log(century(1900));
console.log(century(900));
console.log(century(4530));
