function longestValidParentheses(s) {
  const stack = [-1];
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
      continue;
    }
    stack.pop();
    if (stack.length === 0) {
      stack.push(i);
    } else {
      best = Math.max(best, i - stack[stack.length - 1]);
    }
  }
  return best;
}

const tests = [
  ['(()', 2],
  [')()())', 4],
  ['', 0],
  ['()(())', 6],
  ['((((', 0],
  ['()(()', 2],
];

for (const [input, expected] of tests) {
  const got = longestValidParentheses(input);
  console.log(JSON.stringify(input), got, got === expected ? 'ok' : 'FAIL');
}
