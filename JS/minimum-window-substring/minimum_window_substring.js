function minWindow(s, t) {
  if (t.length === 0 || t.length > s.length) return "";

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

function minWindowBrute(s, t) {
  if (t.length === 0) return "";
  let best = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.slice(i, j + 1);
      const counts = new Map();
      for (const c of sub) counts.set(c, (counts.get(c) || 0) + 1);
      const ok = [...t].every((c) => {
        const n = counts.get(c) || 0;
        counts.set(c, n - 1);
        return n > 0;
      });
      if (ok && (best === "" || sub.length < best.length)) best = sub;
    }
  }
  return best;
}

const tests = [
  ["ADOBECODEBANC", "ABC"],
  ["a", "a"],
  ["a", "aa"],
  ["aa", "aa"],
  ["abc", ""],
  ["cabwefgewcwaefgcf", "cae"],
];

for (const [s, t] of tests) {
  const fast = minWindow(s, t);
  const slow = minWindowBrute(s, t);
  console.log(s, t, JSON.stringify(fast), fast.length === slow.length ? "ok" : "mismatch");
}
