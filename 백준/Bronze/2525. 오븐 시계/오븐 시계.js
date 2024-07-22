const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [H, M] = input[0].split(" ").map(Number);
const cookTime = Number(input[1]);
let hour = H;
let min = M + cookTime;

while (min >= 60) {
  hour++;
  min -= 60;

  if (hour > 23) {
    hour -= 24;
  }
}

console.log(hour, min);