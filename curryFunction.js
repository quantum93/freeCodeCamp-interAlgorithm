function add(a) {
  let curry = (b) => {
    a += b
    console.log(a, b, curry);
    //return curry
  }
  curry.toString = () => a
  console.log(curry);
  //return curry
}

//console.log(add(1))
console.log(add(1)(2))
//console.log(add(1)(2)(3))
//console.log(add(1)(2)(3)(4))