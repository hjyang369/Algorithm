const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

if (A !== B && B !== C && C !== A) {
  console.log(A * 100);
} else if (A == B && B == C) {
  console.log(10000 + A * 1000);
} else {
  console.log(1000 + B * 100);
}