const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);
let num = N;

for (let j = 0; j < N; j++) {
  if (arr[j] <= 1) {
    num--;
  } else {
    for (let i = 2; i < arr[j]; i++) {
      if (arr[j] % i === 0) {
        num--;
        break;
      }
    }
  }
}

console.log(num);