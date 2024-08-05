const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = input[0];

for (let i = 1; i <= T; i++) {
  console.log(
    `Case #${i}: ${input[i][0]} + ${input[i][2]} = ${
      Number(input[i][0]) + Number(input[i][2])
    }`
  );
}
