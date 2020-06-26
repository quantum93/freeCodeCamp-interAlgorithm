/* function pairElement(str) {
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
} */

function pairElement(str) {
  let arr = str.split(""); // 먼저 string을 array로 만든다. 
  var pairs = {A:"T", T:"A", C:"G", G:"C"};
  return arr.map(x => [x, pairs[x]]); // 만들어진 array에 대해서 pair가 되는 property를 object에서 불러온다. 그렇게 불러온 pair와 같이 다시 배열을 만들어서 return한다. 
}

console.log(pairElement("ATCGA"));
