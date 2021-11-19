const findNextSquare = 121;

function nextPerfectSquare(sqr) {
  let num = Math.sqrt(sqr);
  num++;
  if (num * num !== Math.round(num * num)) {
    return -1;
  } else {
    return num * num;
  }
}

console.log(nextPerfectSquare(625));
console.log(nextPerfectSquare(114));
