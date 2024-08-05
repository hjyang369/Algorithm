const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

if (A !== B && B !== C && C !== A) {
  console.log(A * 100);
} else if (A == B && B == C) {
  console.log(10000 + A * 1000);
} else {
  console.log(1000 + B * 100);
}

// 다른 사람 풀이
// else console.log(Math.max(a,b,c)*100); -> max로 최댓 값 가져옴
// 나는 이미 정렬이 되어 있어서 B는 무조건 같은 값이라서 B로 계산했음
