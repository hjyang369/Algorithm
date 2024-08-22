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

// 이렇게 리듀스 하나로 해결하고 싶었다.
// const avg = arr.reduce((sum, value) => sum + (value / M * 100), 0) / N;
