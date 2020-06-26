/** 우선 소수를 판별하는 함수와 실제로 합산을 하는 함수를 따로 만들어서 접근한다. 이게 훨씬 덜 어렵다. 
 * 0과 1은 소수가 아니므로 굳이 판별하지 않고 밑에서 처리한다. n이 1이 아니고 0이 아니면 true 를 반환한다. 
 * n !== 1 && n !== 0을 if에서 판별하는 것보다 훨씬 깔끔
 * // num으로 주어지는 숫자로 array를 만드것 보다 더 좋아 보인다. 
 * let arr = Array.from({length:num},(v,k)=>k+1); 
 * 으로 주어진 num = 10에 대해서 [1,2,3,4,5,6,7,8,9,10]을 만드는 방법은 알아둘 필요가 있지만  
 */

function sumPrimes(num) {

  function testPrime(n) {
    for (let i = 2; i < n; i++) { 
      if (n % i === 0) return false; 
    }
    return n !== 1 && n !== 0;  
  } 
  
  let primeSum = 0;
  for  (let i = 1; i <= num; i++) {  
    if(testPrime(i)) { primeSum += i; }
  }
  return primeSum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));

/*   let primeSum = 0;
  let arr = Array.from({length:num},(v,k)=>k+1);
  
  for (let i = 1; i < arr.length; i++) {
    if(test_prime(i) === true) {
      primeSum += i;
    }
  }
  return primeSum; */

/*   function test_prime(n) {
  if (n===1) { return false; }
  else if(n === 2) { return true; }
    else {
      for(var x = 2; x < n; x++) {
        if(n % x === 0) { return false; }
      }
      return true;  
    }
  } */