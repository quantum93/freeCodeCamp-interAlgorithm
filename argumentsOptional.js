function addTogether() {
console.log(arguments[0]);
/*   if(typeof(arguments[0]) === "number" && typeof(arguments[1]) === "number") {
    return [arguments[0], arguments[1]].reduce((previous, current) => {
    return previous + current;
    });
  } else {
    return undefined;
  } */
}

//console.log(addTogether(2, 3))
//console.log(addTogether(23, 30))
//console.log(addTogether(2, "3"))
//console.log(addTogether("http://bit.ly/IqT6zt"))
console.log(addTogether(5)(7))
//console.log(addTogether(2)([3]))
