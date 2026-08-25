function minWindow(s, t) {
  if (!s || !t || s.length < t.length) return "";

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
    if (need[ch] !== undefined) {
      if (need[ch] > 0) missing--;
      need[ch]--;
    }

    while (missing === 0) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestStart = left;
      }
      const lch = s[left];
      if (need[lch] !== undefined) {
        need[lch]++;
        if (need[lch] > 0) missing++;
      }
      left++;
    }
  }

  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}

function runTests() {
  const cases = [
    ["ADOBECODEBANC", "ABC", "BANC"],
    ["a", "a", "a"],
    ["a", "aa", ""],
    ["ab", "b", "b"],
    ["", "a", ""],
    ["aa", "aa", "aa"],
    ["cabwefgewcwaefgcf", "cae", "cwae"],
  ];

  for (const [s, t, expected] of cases) {
    const result = minWindow(s, t);
    console.log(`minWindow(${JSON.stringify(s)}, ${JSON.stringify(t)}) = ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`);
  }
}

runTests();
