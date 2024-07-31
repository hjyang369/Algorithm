const input = require("fs").readFileSync("/dev/stdin").toString().trim();


let result = true;

for (let i = 0; i < input.length; i++) {
  if (input.length === 1) {
    result = true;
    break;
  }

  if (i === input.length - 1 - i) {
    break;
  }

  if (input[i] === input[input.length - 1 - i]) {
    continue;
  } else {
    result = false;
    break;
  }
}

console.log(result ? 1 : 0);