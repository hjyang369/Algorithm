const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [M, N] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const result = [];

for (let j = M; j <= N; j++) {
  let a = false;
  j === 2 && result.push(j);
  for (let i = 2; i < j; i++) {
    if (j % i === 0) {
      a = true;
    }
    if (i === j - 1) {
      a === false && result.push(j);
    }
  }
}

if (result.length > 0) {
  console.log(result.reduce((a, c) => a + c, 0));
  console.log(result[0]);
} else {
  console.log(-1);
}