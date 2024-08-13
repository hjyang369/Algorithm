const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

let time = 0;

const arr = [
  [],
  [],
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

for (let i = 0; i < input.length; i++) {
  const arrayIndex = arr.findIndex((subArr) => subArr.includes(input[i]));
  time += arrayIndex + 1;
}

console.log(time);