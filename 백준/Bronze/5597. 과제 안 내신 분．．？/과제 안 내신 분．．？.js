const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const arr = Array.from({ length: 30 }, (_, i) => i + 1);
console.log(arr.filter((ele) => !input.includes(ele)).join("\n"));