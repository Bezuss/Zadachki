function longestValidParentheses(s) {
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j += 2) {
      if (isValid(s.slice(i, j))) {
        best = Math.max(best, j - i);
      }
    }
  }
  return best;
}

function isValid(str) {
  let open = 0;
  for (const ch of str) {
    if (ch === '(') open++;
    else open--;
    if (open < 0) return false;
  }
  return open === 0;
}

console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));
