const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));
const [N, M] = input.shift();
const result = Array.from(Array(N).fill(0));

for (let l = 0; l < M; l++) {
  const [i, j, k] = input[l];
  for (let t = i; t <= j; t++) {
    result[t - 1] = k;
  }
}

console.log(result.join(" "));