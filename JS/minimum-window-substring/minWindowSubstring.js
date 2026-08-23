function minWindow(s, t) {
  if (!s || !t) return "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.slice(i, j + 1);
      if (containsAll(sub, t)) {
        return sub;
      }
    }
  }
  return "";
}

function containsAll(sub, t) {
  const need = {};
  for (const ch of t) {
    need[ch] = (need[ch] || 0) + 1;
  }
  for (const ch of sub) {
    if (need[ch]) need[ch]--;
  }
  return Object.values(need).every(v => v <= 0);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
