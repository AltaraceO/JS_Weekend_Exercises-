// let find = [7, 3, 3, 3, 3, 3];
let find = [0, 0, 0, 0, 0.5, 0, 0];

function findDifference(arr) {
  let first = arr[0];
  let equal = [];
  let inEqual = [];

  for (let i = 0; i < arr.length; i++) {
    if (first !== arr[i]) {
      inEqual.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }
  console.log(equal.length, inEqual.length);

  if (equal.length > inEqual.length) {
    return console.log(inEqual[0]);
  } else {
    return console.log(equal[0]);
  }
}

findDifference(find);

// console.log(new Set(find));
