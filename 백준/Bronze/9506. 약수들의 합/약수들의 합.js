const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const A = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const input = A.slice(0, A.length - 1);

for (let j = 0; j < input.length; j++) {
  let arr = [];
  for (let i = 1; i <= input[j]; i++) {
    input[j] % i === 0 && arr.push(i);
  }

  const sum = arr.slice(0, arr.length - 1).reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  if (sum === input[j]) {
    const text = arr.slice(0, arr.length - 1).join(" + ");
    console.log(`${input[j]} = ${text}`);
  } else {
    console.log(`${input[j]} is NOT perfect.`);
  }
}