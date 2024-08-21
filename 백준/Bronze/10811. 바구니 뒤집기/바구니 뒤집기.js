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

// const [N, M] = input[0].split(" ").map(Number);
// let array = Array(N).fill().map((_, i) => i + 1);

// for (let s = 1; s < input.length; s++) {
//   const [i, j] = input[s].split(" ").map(Number);
//   const reversed = array.slice(i - 1, j).reverse();
//   array.splice(i - 1, j - i + 1, ...reversed); // splice로 같이 붙여주면 되구나..
// }

// console.log(array.join(" "));
