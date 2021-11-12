function shortWord(arr) {
  let shortest = arr[0];
  //   console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i].length < shortest.length) shortest = arr[i];
  }
  return shortest;
}

console.log(shortWord(["thelongest", "shorter", "sho"]));
console.log(shortWord(["th", "sho"]));
console.log(shortWord(["th", "s"]));
