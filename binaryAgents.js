function binaryAgent(str) {
  let decArr = str.split(" ").map((binary) => parseInt(binary, 2));
  let charArr = decArr.map(decimal => String.fromCharCode(decimal));
  return charArr.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

/**
 * 거의 비슷한 방식의 solution. 하지만 좀더 한꺼번에 처리하는 방식.
 * 때문에 변수 선언이 최소화된 접근
 */

function binaryAgent2(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

/**
 * 아래의 고급스러운 접근도 확인해 보자...
 * Find all groups of one or more digits followed by one other character
 * Replace with a string created from the specified sequence of UTF-16 code units
 * Use 0b to lead the code unit to express that a binary integer literal is being converted.
 * 
 */
const binaryAgent3 = str => str.replace(/\d+./g, char => String.fromCharCode(`0b${char}`));
       