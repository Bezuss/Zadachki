function minWindow(s, t) {
  if (t.length > s.length) return "";

  const need = new Map();
  for (const c of t) need.set(c, (need.get(c) || 0) + 1);

  let missing = t.length;
  let left = 0;
  let bestStart = 0;
  let bestLen = Infinity;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (need.has(c)) {
      if (need.get(c) > 0) missing--;
      need.set(c, need.get(c) - 1);
    }

    while (missing === 0) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestStart = left;
      }
      const l = s[left];
      if (need.has(l)) {
        need.set(l, need.get(l) + 1);
        if (need.get(l) > 0) missing++;
      }
      left++;
    }
  }

  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
