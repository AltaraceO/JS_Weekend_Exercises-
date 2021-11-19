function popGrowth(strt, perc, newPpl, goal) {
  let growth = strt;
  let counter = 0;

  while (growth <= goal) {
    growth += Math.floor((growth * perc) / 100 + newPpl);

    counter++;
  }

  return counter;
  // console.log(growth);
}

console.log(popGrowth(1000, 2, 50, 1200));
console.log(popGrowth(1500000, 2.5, 10000, 2000000));
