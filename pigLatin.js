function translatePigLatin(str) {
  let myRegex = /^[^aeiou]+/
  let myConsonant = str.match(myRegex);
  console.log(myConsonant);
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));