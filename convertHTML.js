/** 언듯 if else 의 chain을 생각할 수 있지만 switch 문으로 바꿀 수도
 * 하지만 한번더 switch문은 object를 이용하면 더 간략하게 작성할 수 있다.
 */

function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  }
  let newStr ="";
  for (let i = 0; i < str.length; i++) {
    if (entities.hasOwnProperty(str[i])) {
      newStr = newStr.concat(entities[str[i]]);
    } else {
      newStr = newStr.concat(str[i]);
    }
  }
  return newStr;
}

console.log(convertHTML("abc"));
console.log(convertHTML("<>"));
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));
