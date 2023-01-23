const fs = require('fs')

const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

fs.writeFileSync('./content/third.txt', `this file contains: ${first} ${second}`, {flag: 'a'})