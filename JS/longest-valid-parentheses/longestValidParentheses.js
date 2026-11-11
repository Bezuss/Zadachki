function longestValidParentheses(s) {
  const stack = [-1];
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        best = Math.max(best, i - stack[stack.length - 1]);
      }
    }
  }
  return best;
}

console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));
