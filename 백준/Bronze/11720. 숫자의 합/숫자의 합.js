const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, str] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = str.split("").map(Number);

const sum = arr.slice(0, arr.length).reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);