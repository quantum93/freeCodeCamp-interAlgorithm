function smallestCommons(arr) {
  const numList = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    numList.push(i);
  }
  return numList;
}


console.log(smallestCommons([1,5]));