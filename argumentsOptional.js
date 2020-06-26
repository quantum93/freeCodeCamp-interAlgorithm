/** 아래의 방법말고 curry function을 이용하는 방법(함수형 프로그래밍)이 존재한다. 
 * https://stackoverflow.com/questions/5832891/variadic-curried-sum-function
 * curry를 쓰지 않고 접근하는 가장 중요한 스텝은 인자의 갯수가 1개인 경우와 2개인 경우를 분리해서 
 * 생각하는 과정.
 * 굳이 curry를 쓰지 않더라도 아래의 간단한 2단계 curry 접근 방법이 있다. 
 * function add(a,b) {
 *  if(arguments.length === 1) {
 *    return function(b2) { // You could call this arg `b` as well if you like,
 *      return a + b2;      // it would shadow (hide, supercede) the one above
 *     };
 *  }
 *  return a + b;
 * }
 * 
 * console.log(add(10, 10)); // 20
 * console.log(add(10)(10)); // 20
 */

function addTogether(a, b) {
  if(arguments.length === 1 && typeof(a) === "number") {
    return function(b) {
      if(typeof(b) === "number") { return a + b }
    }
  } else if (arguments.length === 2 && typeof(b) === "number") {
    return a + b;
  }
}

console.log(addTogether("http://bit.ly/IqT6zt"))
console.log(addTogether(2)([3]))
console.log(addTogether(5)(7))
console.log(addTogether(2, "3"))
console.log(addTogether(2, 3))
console.log(addTogether(23, 30))