function tribonacci(arr, loopIte) {
  // use the same arr enterd instead of variables
  for (let i = 1; i < loopIte; i++) {
    // console.log(arr[0]);
    arr[0] = arr[0] + arr[1] + arr[2];
    // console.log(arr[1]);
    arr[1] = arr[0] + arr[1] + arr[2];
    // console.log(arr[2]);
    arr[2] = arr[0] + arr[1] + arr[2];
  }
  return arr[2];
}

function TestTribonacci() {
  console.log("Return tribunacci [1,1,1] n-4");
  console.log(tribonacci([1, 1, 1], 4));
}

TestTribonacci();
