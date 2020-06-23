function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
      console.log(result);
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

//console.log(sumFibs(1));
//console.log(sumFibs(2));
console.log(sumFibs(3));
console.log(sumFibs(4));
console.log(sumFibs(5));
//console.log(sumFibs(6));
//console.log(sumFibs(7));
//console.log(sumFibs(8));
//console.log(sumFibs(9));
//console.log(sumFibs(10));
