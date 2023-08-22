const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    n = Number(input[0]);
    if(n % 2 == 0) console.log(`${n} is even`);
    else console.log(`${n} is odd`);
    
}).on('close', function () {
});