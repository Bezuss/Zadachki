function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}

function longestPalindrome(s) {
  let best = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (j - i + 1 > best.length && isPalindrome(s, i, j)) {
        best = s.slice(i, j + 1);
      }
    }
  }
  return best;
}

console.log(longestPalindrome('babad'));
