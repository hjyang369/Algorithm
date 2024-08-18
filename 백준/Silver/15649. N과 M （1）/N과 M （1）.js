const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = new Array(N).fill(false);
const result = [];

const dfs = (count) => {
  if (count === M) {
    console.log(result.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;

    visited[i] = true;
    result.push(i + 1);
    dfs(count + 1);
    result.pop();
    visited[i] = false;
  }
};

dfs(0);