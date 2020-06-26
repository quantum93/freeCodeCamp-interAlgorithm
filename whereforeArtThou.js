function whatIsInANameX(collection, source) {
  let srcKeys = Object.keys(source);

  return collection.filter((obj) => {
    for (let i = 0; i < srcKeys.length; i++) {
      console.log(srcKeys[i], obj[srcKeys[i]], source[srcKeys[i]])
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}
/** return으로 true or false를 주면 다음과 같이 .every() 적용하는 것을 생각할 수 있다.
 * 
 */

function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);

  return collection.filter((obj) => {
    return srcKeys.every((key) => {
      console.log(obj[key], source[key]);
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
                           { last: "Capulet" }));
/*
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
*/