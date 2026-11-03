function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

function longestPalindrome(s) {
  let start = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    const odd = expand(s, i, i);
    const even = expand(s, i, i + 1);
    const len = Math.max(odd, even);
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return s.slice(start, start + maxLen);
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
