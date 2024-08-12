const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let arr = [];
let num = Number(input);
let n = 2;

while (num > 1) {
  if (num % n === 0) {
    arr.push(n);
    num = num / n;
  } else {
    n++;
  }
}

console.log(arr.join("\n"));