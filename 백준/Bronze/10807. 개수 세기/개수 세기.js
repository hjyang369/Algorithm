const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const v = input.pop();
const arr = input[1].split(" ").map(Number);

console.log(arr.filter((ele) => ele === Number(v)).length);