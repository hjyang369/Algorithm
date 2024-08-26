const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().toLocaleUpperCase();

const obj = {};

for (let i = 0; i < input.length; i++) {
  if (obj[input[i]] === undefined) {
    obj[input[i]] = 0;
  }
  obj[input[i]]++;
}

const maxValue = Math.max(...Object.values(obj));
const maxCount = Object.values(obj).filter(
  (value) => value === maxValue
).length;
const firstMaxKey = Object.keys(obj).find((key) => obj[key] === maxValue);

console.log(maxCount > 1 ? "?" : firstMaxKey);