function dropElements(arr, func) {
  const result = arr.filter((num) => func(num))
  return result;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));