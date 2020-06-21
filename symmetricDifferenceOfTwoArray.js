function diffArray(arr1, arr2) {
  let newArr = [];
  for (const ele of arr1) {
    if (!arr2.includes(ele)) {newArr.push(ele);}
  }
  for (const ele of arr2) {
    if (!arr1.includes(ele)) {newArr.push(ele);}
  }
  return newArr;
}

console.log(diffArray([1,2,3,4], [1,2,3,4,5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],                     ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],                     ["diorite", "andesite", "grass", "dirt", "dead shrub"]));