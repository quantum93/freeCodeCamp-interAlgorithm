function sumPrimes(num) {

  function test_prime(n) {
    for (let i = 2; i < n; i++) {
      if(n % i === 0) return false;
    }
    return n !== 1 && n !== 0; 
  } 
  
  let primeSum = 0;
  let arr = Array.from({length:num},(v,k)=>k+1);
  
  for (let i = 1; i < arr.length; i++) {
    if(test_prime(i) === true) {
      primeSum += i;
    }
  }
  return primeSum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));


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