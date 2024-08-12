const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  if (input[i].length === 1) {
    console.log(input[i][0] + input[i][0]);
  } else {
    console.log(input[i][0] + input[i][input[i].length - 1]);
  }
}