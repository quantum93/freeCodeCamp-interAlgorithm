var Person = function(firstAndLast) {

  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  }
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  }

  this.setFirstName = function(first) {
    firstAndLast = first + " " + firstAndLast.split(" ")[1];
  }
  this.setLastName = function(last) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + last;
  }
  this.setFullName = function(firstAndLast) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + firstAndLast.split(" ")[1];
  }

  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());