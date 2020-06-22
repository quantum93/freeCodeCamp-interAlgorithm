function pairElement(str) {
  let newArr = [];
  let result = [];

  for (let i = 0; i < str.length; i++) {
    const dna = str[i];
    switch(dna) {
      case "G":
        newArr.push(dna, "C");
        break;
      case "C":
        newArr.push(dna, "G")
        break;
      case "A":
        newArr.push(dna, "T");
        break;
      case "T":
        newArr.push(dna, "A");
        break;
      default:
        console.log("You have a certain problem!")
    }
  }
  while(newArr.length) result.push(newArr.splice(0,2)); // 1D 배열의 원소로 2D 배열을 만드는 좋은 방법.
  return result;
}

console.log(pairElement("ATCGA"));
