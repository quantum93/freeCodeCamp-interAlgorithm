function sumPrimes(num) {
  let primeSum = 0;
  let prime = 1;

  while (primeSum <= num) {
    if (prime === 1 || prime === 2) {
      primeSum += prime;
    } else {
      for(let i = 2; i < num; i++) {
        if(prime%i === 0) {
          return false
        }
        return primeSum += prime;
      }
    }

  }
  return primeSum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
