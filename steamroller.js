function steamrollArray(arr) {
  let startArr = arr;
  for (let i = 0; i < arr.length; i++) {
    let flattendArr = [].concat(...startArr);
    startArr = flattendArr;
  }
  return startArr;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
