function whatIsInAName(collection, source) {
  var arr = [];
  console.log(Object.keys(source), Object.values(source));
  console.log(Object.keys(collection), Object.values(collection));
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
                           { last: "Capulet" }));

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], 
                           { "apple": 1 }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
                           { "apple": 1, "bat": 2 }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
                           { "apple": 1, "cookie": 2 }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], 
                           { "apple": 1, "bat": 2 }));

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], 
                           {"a": 1, "b": 9999, "c": 3}));
