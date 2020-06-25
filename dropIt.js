function dropElements(arr, func) {
  let arrLength = arr.length; // shift를 써서 배열의 길이가 변경되므로 초기 배열의 길이는 고정으로 저장해야함
  for (let i = 0; i < arrLength; i++) { // arr.length를 쓰면 매번 로직일 돌때 길이 자체가 변한다! 
    if (!func(arr[0])) {
      arr.shift();
    }
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));