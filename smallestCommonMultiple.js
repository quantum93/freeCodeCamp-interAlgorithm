function smallestCommons(arr) {
  const numList = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) { numList.push(i); }
  
  let startNum = 0;
  (numList[0] === 1) ? startNum = numList[1]: startNum = numList[0];
  console.log(numList, startNum);

}


console.log(smallestCommons([5,1]));