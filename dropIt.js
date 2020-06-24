function dropElements(arr, func) {
  const result = arr.filter((num) => func(num))
  return result;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));