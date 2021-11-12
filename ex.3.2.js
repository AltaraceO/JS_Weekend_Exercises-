function theBus(arrs) {
  let total = 0;
  for (let i = 0; i < arrs.length; i++) {
    total += arrs[i][0] - arrs[i][1];
  }
  console.log(total);
}

theBus([
  [10, 0],
  [3, 5],
  [5, 8],
]);
