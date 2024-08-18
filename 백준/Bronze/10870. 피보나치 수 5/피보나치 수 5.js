const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const arr = [0, 1];

for (let i = 2; i <= input; i++) {
  arr.push(arr[i - 2] + arr[i - 1]);
}

console.log(arr[input]);