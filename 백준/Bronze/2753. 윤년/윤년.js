const { getCipherInfo } = require("crypto");
const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = fs.readFileSync(filePath).toString();

if (N % 4 === 0 && N % 100 !== 0) {
  console.log(1);
} else if (N % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
