const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

let str = "";

for (let i = 1; i <= input / 4; i++) {
  str += "long ";
}

str += "int";
console.log(str);