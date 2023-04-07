// we gonna import the only one  module which is created in operator.js
// const add = require("./14operator");
// if we have to import multiple module at a time from operator.js

const {add, sub, name, mult,area} = require("./13operator")


console.log(add(5,7));
console.log(sub(7,5));
console.log(area(5,9));
console.log(mult(1056347,765634));
console.log(name);