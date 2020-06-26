function sumAll(arr) {
  let result = 0;
  for (let i = Math.min.apply(Math, arr); i <= Math.max.apply(Math, arr); i++) {
    result += i;
  } 
  return result;
}

console.log(sumAll([5, 10]));