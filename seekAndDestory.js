function destroyer(arr) {
  let args = Array.from(arguments); // Array.prototype.slice.call(arguments)와 동일
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if(arr[i] === args[j]) { 
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean); // .filter하지 않으면 [ 1, <2 empty items>, 1, <2 empty items> ]
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
