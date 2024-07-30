const { getCipherInfo } = require("crypto");
const fs = require("fs");
const { join } = require("path");
const [x, y] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (x > 0 && y > 0) {
  console.log(1);
} else if (x > 0 && y < 0) {
  console.log(4);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
}
