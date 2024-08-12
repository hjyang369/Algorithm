const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(
  Math.max(
    Number(A.split("").reverse().join("")),
    Number(B.split("").reverse().join(""))
  )
);
