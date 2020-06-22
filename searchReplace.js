function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()) {
    after = `${after[0].toUpperCase()}${after.slice(1)}`;
  };
  const regex = new RegExp(before)
  return str.replace(regex, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");