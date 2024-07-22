const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString() * 1;

const arr = [];
for (let i = input; i >= 1; i--) {
  const a = [];
  for (let j = 1; j <= input; j++) {
    if (i > j) {
      a.push(" ");
    } else {
      a.push("*");
    }
  }
  arr.push(a.join(""));
}
console.log(arr.join("\n"));