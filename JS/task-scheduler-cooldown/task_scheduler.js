function leastInterval(tasks, n) {
  const counts = new Map();
  for (const t of tasks) {
    counts.set(t, (counts.get(t) || 0) + 1);
  }
  const freqs = [...counts.values()];
  const maxFreq = Math.max(...freqs);
  const maxCount = freqs.filter((f) => f === maxFreq).length;
  const slots = (maxFreq - 1) * (n + 1) + maxCount;
  return Math.max(slots, tasks.length);
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0));
console.log(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2));
