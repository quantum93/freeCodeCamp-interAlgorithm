var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  }
  this.getLastName = function() {
    return fullName.split(" ")[1];
  }

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  }
  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  }
  this.setFullName = function(newName) {
    fullName = newName;
  }

};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFullName());