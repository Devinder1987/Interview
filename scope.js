// String to Number conversion
let a = 12 + 3 + 'dev' + 1 + 3; // 15dev13
console.log(a);

// Calling variable before defined
console.log(a1); // undefined
var a1 = 10;
console.log(b1); // uncaught error: ReferenceError- error occures when any variable is not present at the time of use.
let b1 = 5;
