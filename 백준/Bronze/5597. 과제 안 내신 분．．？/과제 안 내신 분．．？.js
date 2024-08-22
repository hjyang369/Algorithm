const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const arr = Array.from({ length: 30 }, (_, i) => i + 1);
console.log(arr.filter((ele) => !input.includes(ele)).join("\n"));

// 다른사람 풀이 
// 항상 indexOf를 생각해내지 못한다ㅜ
// for(var i = 1; i <= 30; ++i) {
//   if(n.indexOf(i.toString()) === -1) {
//     console.log(i);
//   }
// }
