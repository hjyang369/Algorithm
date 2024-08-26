const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" "));

let totalScore = 0;
let totalRange = 0;
const obj = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0,
};

for (let i = 0; i < input.length; i++) {
  const [sub, score, range] = input[i];
  if (range !== "P") {
    totalScore += Number(score);
    totalRange += Number(score) * obj[range];
  }
}

console.log(Number(totalRange) / totalScore);