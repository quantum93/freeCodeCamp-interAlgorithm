function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let startChar = alphabet.indexOf(str[0]);

  for (let i = 0; i < alphabet.slice(startChar).length; i++) {
    if(alphabet.slice(startChar)[i] != str[i]) {
      return alphabet.slice(startChar)[0,i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));