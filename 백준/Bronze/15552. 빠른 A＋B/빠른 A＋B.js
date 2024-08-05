const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.slice(1).map((ele) => ele.split(" ").map(Number));
let result = [];
arr.map((ele) => result.push(ele[0] + ele[1]));

console.log(result.join("\n"));