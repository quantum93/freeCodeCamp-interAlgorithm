function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/) // 공백이 있거나 _가 있거나 또는 글자 하나가 대문자인 경우
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));