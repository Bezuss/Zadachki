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
  return false;
}

console.log(longestValidParentheses('(()'));
