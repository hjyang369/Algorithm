const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input[0] + input[1]);
console.log(input[0] - input[1]);
console.log(input[0] * input[1]);
console.log(parseInt(input[0] / input[1]));
console.log(input[0] % input[1]);

// 몫을 구하기 위해 나눗셈 한 후 정수만 남겨주는 방식으로 parseInt 사용
