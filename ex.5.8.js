function longestWord(arr) {
  let longest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) longest = arr[i];
  }
  return longest;
}

console.log(longestWord(["thelongest", "shorter", "sho"]));
console.log(longestWord(["th", "sho"]));
console.log(longestWord(["th", "s"]));
