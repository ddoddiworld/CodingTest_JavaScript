const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    first = Number(input[0]);
    second = Number(input[1])
    
    console.log(`${first} + ${second} = ${first + second}`)
}).on('close', function () {

});