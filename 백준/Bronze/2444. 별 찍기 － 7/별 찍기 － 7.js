const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();
let result = [];

for (let i = 1; i <= input; i++) {
  let str = "";
  for (let j = i; j <= input - 1; j++) {
    str += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }
  // for (let m = i; m <= input - 1; m++) {
  //   str += " ";
  // }
  result.push(str);
}

for (let i = input - 1; i >= 1; i--) {
  let str = "";
  for (let j = input - 1; j >= i; j--) {
    str += " ";
  }
  for (let k = 2 * i - 1; k >= 1; k--) {
    str += "*";
  }
  // for (let m = input - 1; m >= i; m--) {
  //   str += " ";
  // }
  result.push(str);
}

console.log(result.join("\n"));