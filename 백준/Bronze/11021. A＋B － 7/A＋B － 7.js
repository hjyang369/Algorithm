const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  console.log(`Case #${i}: ${Number(input[i][0]) + Number(input[i][2])}`);
}
