const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let num = 2;

for (let i = 0; i < input; i++) {
  num += 2 ** i;
}

console.log(num ** 2);
