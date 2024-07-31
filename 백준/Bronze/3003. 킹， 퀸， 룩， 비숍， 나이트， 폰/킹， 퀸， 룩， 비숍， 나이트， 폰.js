const { getCipherInfo } = require("crypto");
const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

console.log(
  1 - input[0],
  1 - input[1],
  2 - input[2],
  2 - input[3],
  2 - input[4],
  8 - input[5]
);
