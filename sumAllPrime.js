function sumPrimes(num) {
  
  function test_prime(n) {
    if (n===1) { return false; }
    else if(n === 2) { return true; }
    else {
      for(var x = 2; x < n; x++) {
        if(n % x === 0) { return false; }
      }
      return true;  
    }
  }

  let primeSum = 0;
    if(test_prime(num) === true) {
      primeSum += num
    }

  return primeSum;
}

console.log(sumPrimes(7));
// console.log(sumPrimes(977));

// let arr = Array.from({length:num},(v,k)=>k+1);