const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = input.shift();

for (let i = 0; i < T; i++) {
  let str = "";
  const [R, prev] = input[i].split(" ");

  for (let k = 0; k < prev.length; k++) {
    for (let j = 0; j < R; j++) {
      str += prev[k];
    }
  }
  console.log(str);
}
