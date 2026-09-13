function topKFrequent(nums, k) {
  const counts = new Map();
  for (const n of nums) {
    counts.set(n, (counts.get(n) || 0) + 1);
  }

  const entries = [...counts.entries()];
  entries.sort((a, b) => b[1] - a[1]);

  return entries.slice(0, k).map(e => e[0]);
}

console.log(topKFrequent([1,1,1,2,2,3], 2));
