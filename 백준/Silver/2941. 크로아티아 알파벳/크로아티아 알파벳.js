const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();
const str = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let num = input.length;

for (let i = 0; i < str.length; i++) {
  if (input.split(str[i]).length > 1) {
    num -= input.split(str[i]).length - 1;
  }
}
console.log(num);