/** 아래의 smallestCommons2의 접근 방법을 확인
 * 주어진 함수 전체를 fat arrow로 처리하고
 * 일단 시작하는 최소공배수 값을 그냥 배열의 최대값으로 일단 지정
 * if (sol % i) 은 5%4 가 당연히 0이 아니므로 true를 주니까
 * if 문의 logic이 실행 5 = 5 + 5 즉 조건문이 안 맞을 때마다 
 * 계속 배수를 만들고 있다. 배수를 만들때 곱셈보다 더하면서 만드는게
 * loop와 작업하기 좋은가?
 * max를 다시 i로 할당하는 것은 최초 4로 나눠지는 값을 찾을때까지 다음 숫자 3을 진행하지 않는 효과
 * 그리고 if 문을 만족하면 즉 0이 되면 if 문 전체를 건너뛰고 for에서 i의 값을 줄여서 이를 다시 
 * 확인 
 */

const smallestCommons2 = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

function smallestCommons(arr) {

  const numArr = [];

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
     numArr.push(i); 
    }
  
  let multiNum = numArr.slice(-1)[0]; // 가장 큰수(배열의 마지막 값)의 배수와 비교하는 것이 더 빠르다!

  let checkArr = [];
  (numArr[0] === 1) ? // 1로 나눠서 확인하는 것은 무의미하다. 성능에 중요.
    checkArr = numArr.slice(1, -1): 
    checkArr = numArr.slice(0, -1);
  
  let i = 2;
  let multiArr = [];
  let result = 0;

  while (checkArr.length !== multiArr.length) {
    multiArr = checkArr.filter(num => (multiNum * i) % num === 0);
    result = multiNum * i;
    i++;
  }
  return result;

}

console.log(smallestCommons([5,1]));

