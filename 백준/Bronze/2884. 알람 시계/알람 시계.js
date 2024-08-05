const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [H, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (M >= 45) {
  console.log(H, M - 45);
} else {
  H === 0 ? console.log(23, 60 - (45 - M)) : console.log(H - 1, 60 - (45 - M));
}
