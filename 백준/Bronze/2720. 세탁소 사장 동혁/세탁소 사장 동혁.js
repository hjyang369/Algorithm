const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input[0];
let result = Array(T)
  .fill()
  .map(() => [0, 0, 0, 0]);

for (let i = 1; i <= T; i++) {
  let charge = input[i];

  while (charge > 0) {
    if (charge >= 25) {
      charge = charge - 25;
      result[i - 1][0] += 1;
    } else if (charge >= 10) {
      charge = charge - 10;
      result[i - 1][1]++;
    } else if (charge >= 5) {
      charge = charge - 5;
      result[i - 1][2]++;
    } else if (charge >= 1) {
      charge = charge - 1;
      result[i - 1][3]++;
    }
  }
}

console.log(result.map((ele) => ele.join(" ")).join("\n"));