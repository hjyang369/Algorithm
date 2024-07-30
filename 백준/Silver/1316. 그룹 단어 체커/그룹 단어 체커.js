
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);

let prev = [];
let result = 0;

for (let i = 1; i <= N; i++) {
  let string = input[i];

  for (let j = 0; j < string.length; j++) {
    if (prev.includes(string[j])) {
      if (prev[prev.length - 1] === string[j]) {
        prev.push(string[j]);
        string.slice(1);
      } else {
        string = "";
        prev.push(false);
      }
    } else {
      prev.push(string[j]);
      string.slice(1);
    }
  }

  !prev.includes(false) && result++;

  prev = [];
}

console.log(result);
