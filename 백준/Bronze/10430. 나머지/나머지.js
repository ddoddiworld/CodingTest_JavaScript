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
  input = line.split(" ");

  let a = parseInt(input[0]);
  let b = parseInt(input[1]);
  let c = parseInt(input[2]);

  let one = (a + b) % c;
  let two = ((a % c) + (b % c)) % c;
  let three = (a * b) % c;
  let four = ((a % c) * (b % c)) % c;

  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);

  rl.close();
}).on("close", function () {
  process.exit();
});
