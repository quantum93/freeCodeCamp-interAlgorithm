function sumAll(arr) {
  const first = Math.min.apply(Math, arr); // 둘 이상의 원소를 같는 배열에도 적용
  const last = Math.max.apply(Math, arr);
  let result = 0;
  for (let i = first; i <= last; i++) {
    result += i;
  } 
  return result;
}

console.log(sumAll([5, 10]));