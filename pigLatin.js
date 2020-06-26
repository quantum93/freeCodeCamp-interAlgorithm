function translatePigLatin(str) {
  let myRegex = /^[^aeiou]+/
  let myConsonant = str.match(myRegex);
  console.log(myConsonant);
  if (myConsonant === null) {
    return str.concat("way");
  } else {
    return str.split(myRegex).concat(myConsonant).concat("ay").join("");
  }
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));