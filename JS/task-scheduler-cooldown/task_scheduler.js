function leastInterval(tasks, n) {
  const counts = {};
  for (const t of tasks) {
    counts[t] = (counts[t] || 0) + 1;
  }
  const freqs = Object.values(counts);
  const maxFreq = Math.max(...freqs);
  let maxCount = 0;
  for (const f of freqs) {
    if (f === maxFreq) maxCount++;
  }
  return (maxFreq - 1) * (n + 1) + maxCount;
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0));
