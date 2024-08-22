const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const score = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(
  score.map((ele) => (ele / score[0]) * 100).reduce((a, b) => a + b) / N
);