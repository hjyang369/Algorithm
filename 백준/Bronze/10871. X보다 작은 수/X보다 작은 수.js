const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, X] = input.shift().split(" ").map(Number);
const A = input[0].split(" ").map(Number);

let result = [];

for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    result.push(A[i]);
  }
}

console.log(result.join(" "));