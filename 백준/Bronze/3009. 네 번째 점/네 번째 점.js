const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

const left = [];
const right = [];
const result = [];

for (let i = 0; i < 3; i++) {
  const [A, B] = input[i];
  left.push(A);
  right.push(B);
}

for (let j = 0; j < 3; j++) {
  if (left.filter((value) => value == left[j]).length === 1) {
    result[0] = left[j];
  }
  if (right.filter((value) => value == right[j]).length === 1) {
    result[1] = right[j];
  }
}

console.log(...result);