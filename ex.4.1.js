function fibonacci(loopIte) {
  //   let initial = 1;
  let first = 1;
  let middle = 0;
  let second = 1;

  for (let i = 1; i < loopIte; i++) {
    // console.log(first);
    middle = first + second;
    // console.log(middle);
    second = middle + first;
    // console.log(second);
    first = second + middle;
    // first = second + first;
    // console.log(first);
  }
  return second;
}

function Testfibonacci() {
  console.log("Return Fibonachi Func Value 10");
  console.log(fibonacci(10));
}

Testfibonacci();
