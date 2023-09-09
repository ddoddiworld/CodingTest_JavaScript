const solution = (input) => {
  return input;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  console.log(solution(input - parseInt(543)));
  process.exit();
});
