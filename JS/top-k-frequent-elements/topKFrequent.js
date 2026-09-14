function topKFrequent(nums, k) {
  const counts = new Map();
  for (const n of nums) {
    counts.set(n, (counts.get(n) || 0) + 1);
  }

  const buckets = new Array(nums.length + 1);
  for (const [num, freq] of counts.entries()) {
    if (!buckets[freq]) buckets[freq] = [];
    buckets[freq].push(num);
  }

  const result = [];
  for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
    if (buckets[freq]) {
      for (const num of buckets[freq]) {
        result.push(num);
        if (result.length === k) break;
      }
    }
  }

  return result;
}

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));
