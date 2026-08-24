function minWindow(s, t) {
  if (!s || !t) return "";

  const need = {};
  for (const ch of t) {
    need[ch] = (need[ch] || 0) + 1;
  }

  let left = 0;
  let missing = t.length;
  let bestLen = Infinity;
  let bestStart = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (need[ch] > 0) missing--;
    need[ch] = (need[ch] || 0) - 1;

    if (missing === 0) {
      while (need[s[left]] < 0) {
        need[s[left]]++;
        left++;
      }
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestStart = left;
      }
    }
  }

  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
