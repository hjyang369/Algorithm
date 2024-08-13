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


// 다른 사람 풀이
// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf-8')

// 전개연산자로 푸는 방법
// const [[N, M], ...cases] = input.trim().split("\n").map(line => line.split(" ").map(Number));

// const arr = new Array(N).fill(0).map((_, i) => i + 1);

// 나는 따로 배열을 복사해서 값을 바꿔줘야만 값을 유지하면서 바꿀 수 있었는데
// 한번에 바꿔버리니 굳이 신경 쓸 필요가 없어서 좋은듯
// cases.forEach(([i, j]) => {
//     [arr[i - 1], arr[j - 1]] = [arr[j - 1], arr[i - 1]];
// })

// console.log(arr.join(" "));
