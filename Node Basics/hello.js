//const math = require('./maths') // in node js we use require to import files and modules

// we can dirctly use the functions when doing module.exports
const {add, sub} = require('./maths') // use this syntax when directly want to import functions from other files

console.log(add(2,3))
console.log(sub(2,1))
