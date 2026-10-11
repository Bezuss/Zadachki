function merge(intervals) {
  if (intervals.length === 0) return [];
  const sorted = intervals.map(([a, b]) => [a, b]).sort((a, b) => a[0] - b[0]);
  const result = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const last = result[result.length - 1];
    const [start, end] = sorted[i];
    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      result.push([start, end]);
    }
  }
  return result;
}

const tests = [
  [[1, 3], [2, 6], [8, 10], [15, 18]],
  [[1, 4], [4, 5]],
  [[1, 10], [2, 3], [4, 5]],
  [],
];

for (const t of tests) {
  console.log(JSON.stringify(t), '->', JSON.stringify(merge(t)));
}
