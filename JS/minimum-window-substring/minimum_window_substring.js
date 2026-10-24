function minWindow(s, t) {
  let best = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.slice(i, j + 1);
      if (covers(sub, t) && (best === "" || sub.length < best.length)) {
        best = sub;
      }
    }
  }
  return best;
}

function covers(sub, t) {
  const counts = new Map();
  for (const c of sub) counts.set(c, (counts.get(c) || 0) + 1);
  for (const c of t) {
    if (!counts.get(c)) return false;
    counts.set(c, counts.get(c) - 1);
  }
  return true;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
