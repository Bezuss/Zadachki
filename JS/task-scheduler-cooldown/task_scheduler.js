function leastInterval(tasks, n) {
  const counts = {};
  for (const t of tasks) {
    counts[t] = (counts[t] || 0) + 1;
  }
  return 0;
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
