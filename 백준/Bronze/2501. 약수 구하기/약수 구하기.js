const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = [];

for (let i = 1; i <= N; i++) {
  N % i === 0 && result.push(i);
}

console.log(result.length < K ? 0 : result[K - 1]);