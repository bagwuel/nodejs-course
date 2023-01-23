
const fs = require('fs')

// const first = fs.readFileSync('./content/first.txt', 'utf8')
// const second = fs.readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

// fs.writeFileSync('./content/third.txt', `this file contains: ${first} ${second}`, {flag: 'a'})
console.log("task start");
fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log(first);
    fs.readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);
        fs.writeFile('./content/forth.txt', `This is a combination of: ${first} and ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("finished this task 3");
        })
    })
})
console.log("start another task");