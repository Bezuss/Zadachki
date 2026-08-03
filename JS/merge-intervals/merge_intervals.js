function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) return [];

  const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);

  const result = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const curr = sorted[i];
    const last = result[result.length - 1];

    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      result.push(curr);
    }
  }

  return result;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
console.log(mergeIntervals([[1,4],[4,5]]));
