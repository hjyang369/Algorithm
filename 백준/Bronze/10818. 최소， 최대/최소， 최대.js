const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const num = input[0].split(" ").map(Number);
console.log(Math.min(...num), Math.max(...num));