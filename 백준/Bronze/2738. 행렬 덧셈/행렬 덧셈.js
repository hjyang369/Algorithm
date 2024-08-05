const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

const [N, M] = input[0];
const A = input.slice(1, N + 1);
const B = input.slice(N + 1, input.length);

const result = Array(N)
  .fill()
  .map(() => []);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result[i].push(A[i][j] + B[i][j]);
  }
}

console.log(result.map((ele) => ele.join(" ")).join("\n"));