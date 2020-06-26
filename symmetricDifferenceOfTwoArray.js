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

/** 위의 방법은 for 문을 반복하고 있다. 아래의 선언적 방법이 더 깔끔하다. */

function diffArray2(arr1, arr2) {
  return arr1
        .concat(arr2)
        .filter(item => 
          !arr1.includes(item) || !arr2.includes(item)); // filter에서 or 로직을 쓰는 법을 숙지
}

console.log(diffArray2([1,2,3,4], [1,2,3,4,5]));

function diffArray3(arr1, arr2) {
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1); // indexOf가 -1, 즉 index와 값이 다른 것을 추출
  }

  return [...diff(arr1, arr2), ...diff(arr2, arr1)]; //spread operator로 함수를 호출
}

console.log(diffArray3([1,2,3,4], [1,2,3,4,5]));

