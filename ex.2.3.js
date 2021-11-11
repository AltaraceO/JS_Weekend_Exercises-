const findNextSquare = 121;

function nextPerfectSquare(sqr) {
  let num = Math.sqrt(sqr);
  num++;
  if (num * num !== Math.round(num * num)) {
    console.log(-1);
  } else {
    console.log(num * num);
  }
}

nextPerfectSquare(625);
nextPerfectSquare(114);
