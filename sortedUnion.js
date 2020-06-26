/** 아주 중요한 좋은 기법은 filter(Boolean)이다. 입력에서 항상 배열의 갯수가 동일하지 않으므로
 * 그냥 concat하면 반드시 undefined 원소가 생긴다. 이 원소를 없에주는 좋은 방법으로 filter 를 
 * 이용하는데 이때 Boolean constructor를 이용한다. 원소가 존재하면 true를 반환하므로 값을 
 * 그대로 return하고 원소가 존재하지 않는(undefined)경우면 false이므로 원소가 삭제되는 효과를 
 * 가진다. 잘 알아두자.
 */
function uniteUnique(arr1, arr2, arr3, arr4) {
  let result = new Set(arr1.concat(arr2, arr3, arr4).filter(Boolean));
  return Array.from(result);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));