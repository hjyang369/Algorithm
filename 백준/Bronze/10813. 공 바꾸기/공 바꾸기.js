const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

const [N, M] = input.shift();
let pocket = Array.from({ length: N }, (_, i) => i + 1);

for (let k = 0; k < M; k++) {
  let arr = pocket.slice();
  const [i, j] = input[k];
  pocket[i - 1] = arr[j - 1];
  pocket[j - 1] = arr[i - 1];
}

console.log(pocket.join(" "));