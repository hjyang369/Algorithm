const { getCipherInfo } = require("crypto");
const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = fs.readFileSync(filePath).toString().split(" ").map(Number);

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else if (A === B) {
  console.log("==");
}
