function leastInterval(tasks, n) {
  if (tasks.length === 0) return 0;
  const counts = new Map();
  for (const task of tasks) {
    counts.set(task, (counts.get(task) || 0) + 1);
  }
  const freqs = [...counts.values()];
  const maxFreq = Math.max(...freqs);
  const maxCount = freqs.filter((f) => f === maxFreq).length;
  const slots = (maxFreq - 1) * (n + 1) + maxCount;
  return Math.max(slots, tasks.length);
}

const cases = [
  [["A", "A", "A", "B", "B", "B"], 2],
  [["A", "A", "A", "B", "B", "B"], 0],
  [["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2],
  [["A", "B", "C"], 5],
  [[], 3],
];

for (const [tasks, n] of cases) {
  console.log(tasks.join(""), n, "->", leastInterval(tasks, n));
}
