const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    str1 = input[0];
    str2 = input[1];
    console.log(str1 + str2)
}).on('close', function () {

});