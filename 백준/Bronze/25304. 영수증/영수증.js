const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const totalPrice = Number(input[0]);
const products = input
  .slice(2, totalPrice.length)
  .map((ele) => ele.trim().split(" ").map(Number));

let price = 0;

for (let i = 0; i < products.length; i++) {
  price += products[i][0] * products[i][1];
}

console.log(price === totalPrice ? "Yes" : "No");