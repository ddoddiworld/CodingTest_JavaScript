const solution = (input) => {
  return input.toString().trim();
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  console.log(solution(`${input}??!`));
  process.exit();
});
