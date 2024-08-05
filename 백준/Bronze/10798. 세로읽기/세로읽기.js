const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(""));

const max = Math.max(
  input[0].length,
  input[1].length,
  input[2].length,
  input[3].length,
  input[4].length
);

let result = "";

for (let i = 0; i < max; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) {
      result += input[j][i];
    }
  }
}

console.log(result);