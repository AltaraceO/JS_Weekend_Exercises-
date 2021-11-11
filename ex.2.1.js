let list = [19, 5, 42, 2, 77];

function firstTwo(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  return arr[0] + arr[1];
}

console.log(firstTwo(list));
