function smallestCommons(arr) {
  const numArr = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
     numArr.push(i); 
    }
  
  let multiNum = numArr.slice(-1)[0];

  let checkArr = [];
  (numArr[0] === 1) ? 
    checkArr = numArr.slice(1, -1): 
    checkArr = numArr.slice(0, -1);
  
/*   for (let i = 2; i <= 12; i++) {
    const multiArr = checkArr.filter(num => (multiNum * i) % num === 0);
    if(checkArr.length === multiArr.length) {
      return multiNum * i;
    }
  } */

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