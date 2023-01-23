// CommonJS - every file is a module by default
// Modules  - Encapsulated Code (only share minimun)

const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade');

console.log(data);
console.log(names.john);

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)