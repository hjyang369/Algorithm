const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [str, num] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(str[num - 1]);