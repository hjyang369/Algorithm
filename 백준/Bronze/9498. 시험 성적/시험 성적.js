const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const score = fs.readFileSync(filePath).toString();
let rank = "";

if (score <= 100 && score >= 90) {
  rank = "A";
} else if (score < 90 && score >= 80) {
  rank = "B";
} else if (score < 80 && score >= 70) {
  rank = "C";
} else if (score < 70 && score >= 60) {
  rank = "D";
} else {
  rank = "F";
}

console.log(rank);