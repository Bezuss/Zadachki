function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

function longestPalindrome(s) {
  if (s.length < 2) return s;
  let start = 0;
  let maxLen = 1;
  for (let i = 0; i < s.length; i++) {
    const len = Math.max(expand(s, i, i), expand(s, i, i + 1));
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return s.slice(start, start + maxLen);
}

const tests = ['babad', 'cbbd', 'a', '', 'ac', 'racecar', 'forgeeksskeegfor'];
for (const t of tests) {
  console.log(JSON.stringify(t), '->', JSON.stringify(longestPalindrome(t)));
}
