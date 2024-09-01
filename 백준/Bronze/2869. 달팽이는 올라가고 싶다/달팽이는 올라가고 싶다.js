const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B, V] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.ceil((V - B) / (A - B)));

// 반복문을 돌면 시간초과가 나왔다.
// 아래처럼 풀면 답이 나오긴 하지만 반복문이 필요없는 문제였다.
// let day = 0;
// let result = 0;

// while (V > result) {
//   result = result + A;
//   day += 1;

//   if (result >= V) {
//     break;
//   }

//   result = result - B;
// }

// console.log(day);
