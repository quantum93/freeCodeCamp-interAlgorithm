function destroyer(arr) {
  let args = Array.from(arguments); // Array.prototype.slice.call(arguments)와 동일
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if(arr[i] === args[j]) { 
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean); // .filter하지 않으면 [ 1, <2 empty items>, 1, <2 empty items> ]
}

function destroyer2(arr) {
  let args = Array.from(arguments).slice(1); // 두,세번째 원소로 배열을 만든다 [2, 3]
  return arr.filter(function(val) {
    return !args.includes(val); // [2,3] 배열에 대해 그 원소를 포함하지않는 args의 원소를 반환. 
  });
}

/** 가장 고급스러운 방법은 아래와 같은 접근이다.
 * 먼저 const destroyer3 = (arr, ...valsToRemove)에서 주목할 점은 rest parameter를 써서 2, 3 을 하나의 
 * 배열로 만드는 기법이다. 즉 const destroyer3 = ([1, 2, 3, 1, 2, 3], [2, 3])이 되는 과정이다. 
 * 다음 단계로 이를 인자로 보내서 filtering한다. [1, 2, 3, 1, 2, 3]의 원소 중에 valsToRemove배열의 원소에 
 * 포함되지 않는 원소들을 반환시킨다. 
 */
const destroyer3 = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer2([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer3([1, 2, 3, 1, 2, 3], 2, 3));
