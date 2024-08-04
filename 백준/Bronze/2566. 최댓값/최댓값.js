const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.map((ele) => ele.split(" ").map(Number));

let max = arr[0][0];
let location = [0, 0];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (max <= arr[i][j]) {
      max = arr[i][j];
      location[0] = i + 1;
      location[1] = j + 1;
    }
  }
}

console.log(max, ...location);