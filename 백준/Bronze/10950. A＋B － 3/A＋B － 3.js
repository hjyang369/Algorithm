const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = input[0];
const numbers = input.slice(1, T + 1).map((ele) => ele.split(" ").map(Number));

for (let i = 0; i < T; i++) {
  console.log(numbers[i][0] + numbers[i][1]);
}
