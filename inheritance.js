function parent() {
  this.name = 'Devinder';
}

function child() {
  this.status = 'Married';
}
parent.prototype.fn1 = function () {
  return 'Parent prototype 1';
};
parent.prototype.fn2 = function () {
  return 'Parent prototype 1';
};
child.prototype = new parent(); // Inheritance , Parent properties in Child.
child.prototype.fn = function () {
  // Adding new prototype property, nothing to do with inheritance.
  return 'Child Proto';
};
child.prototype.fn2 = function () {
  return 'child prototype2';
};
const childObj = new child();
const parentObj = new parent();

console.log('--------');
console.log(childObj.status); // Married
console.log(childObj.name); // Devinder
console.log(childObj.fn()); // Child Proto
console.log(childObj.fn1()); // Parent prototype 1
console.log(childObj.fn2()); // child prototype2
console.log(parentObj.fn2()); // Parent prototype 1
