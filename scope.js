// String to Number conversion
const flag = true;
let a = 12 + 3 + 'dev' + 1 + 3 + flag; // 15dev13true -- before String is consider as number. After string everything is consider as string
a = flag + 12 + 3 + 'dev' + 1 + 3 + flag; // 16dev13true -- true is consider as 1. false as 0.

// Calling variable before defined
console.log(a1); // undefined
var a1 = 10;
console.log(b1); // uncaught error: ReferenceError- error occures when any variable is not present at the time of use.
let b1 = 5;
// Scope
const greet = 'hey';
function fn() {
  let greet = 'Num num';
  console.log(greet);
}
fn(); // ‘Num num’
console.log(greet); // ‘Hey’
function fn2() {
  greet = 'Num num'; // Uncaught TypeError: Assignment to constant variable.
  console.log(greet);
}
fn2();
console.log(greet);
