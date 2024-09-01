const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, B] = fs.readFileSync(filePath).toString().trim().split(" ");
let ans = parseInt(N, Number(B));

console.log(ans);
