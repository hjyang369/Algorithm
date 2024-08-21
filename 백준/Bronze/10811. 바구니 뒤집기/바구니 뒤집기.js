const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));
const [N, M] = input.shift();
let basket = Array.from({ length: N }, (_, i) => i + 1);
let result;

for (let k = 0; k < M; k++) {
  result = basket.slice();
  const [i, j] = input[k];

  if (j - i > 0) {
    for (let m = 0; m <= j - i; m++) {
      basket[j - m - 1] = result[i + m - 1];
    }
  }
}

console.log(basket.join(" "));