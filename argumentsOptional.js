function addTogether(a, b) {
  if(arguments.length === 1 && typeof(a) === "number") {
    return function(b) {
      if(typeof(b) === "number") {
        return a + b;
      }
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

/* function addTogether(a, b) {
  if (typeof(a) !== "number") {
    return undefined;
  } else if (arguments.length === 1) {
    return function(b) { 
      if(typeof(b) === "number") {
        return a + b;      
      } else {
        return undefined;
      }
    };
  } 
  return a + b;
} */