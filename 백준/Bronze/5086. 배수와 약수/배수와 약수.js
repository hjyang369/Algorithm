const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

input.pop();

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i];
  if (A % B === 0) {
    console.log("multiple");
  } else {
    B % A === 0 ? console.log("factor") : console.log("neither");
  }
}
