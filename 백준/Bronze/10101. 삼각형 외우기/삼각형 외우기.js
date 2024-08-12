const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = [a, b, c].slice(0, 3).reduce((acc, cur) => {
  return acc + cur;
}, 0);

if (sum === 180) {
  if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a !== b && b !== c && c !== a) {
    console.log("Scalene");
  } else {
    console.log("Isosceles");
  }
} else {
  console.log("Error");
}
