const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ");
const arr = input[1].split(" ");
const sumArr = [];

for (let i = 0; i < Number(N); i++) {
  for (let j = i + 1; j < Number(N); j++) {
    for (let k = j + 1; k < Number(N); k++) {
      const sum = Number(arr[i]) + Number(arr[j]) + Number(arr[k]);
      if (M >= sum) {
        sumArr.push(sum);
      }
    }
  }
}
const result = sumArr.filter((ele) => M >= ele);
console.log(Math.max(...result));