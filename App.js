// npm  - global command, comes with node
// npm  --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step answer the questions, press enter to skip any question)
// npm init -y (everything default setup)




const lodash = require('lodash')

const arr = [1, [2, [3, [4, [5]]]]];

const newArr = lodash.flattenDeep(arr);

console.log(newArr);
