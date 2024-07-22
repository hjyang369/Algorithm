const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = Number(input[0]);
const B = input[1].split("").map(Number).reverse();
const C = B.map((ele) => ele * A);

console.log(C[0]);
console.log(C[1]);
console.log(C[2]);
console.log(C[0] + C[1] * 10 + C[2] * 100);
