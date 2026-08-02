function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) return [];

  const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);

  const result = [];

  return result;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
