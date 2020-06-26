/** get은 기존 argument로 설정된 결과를 얻는 과정이다.
 * set은 새로운 argument로 기존 결과를 다시 선언하는 과정이다.
 *
 */

var Person = function(firstAndLast) {
  let fullName = firstAndLast; // argument를 내부 변수로 선언을 해줘야 한다.

  
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