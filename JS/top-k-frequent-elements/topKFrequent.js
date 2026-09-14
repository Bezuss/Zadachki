function topKFrequent(nums, k) {
  if (!Array.isArray(nums) || nums.length === 0) return [];
  if (k <= 0) return [];

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
    const bucket = buckets[freq];
    if (!bucket) continue;
    for (const num of bucket) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
}

function runTests() {
  console.log(topKFrequent([1,1,1,2,2,3], 2));
  console.log(topKFrequent([1], 1));
  console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));
  console.log(topKFrequent([], 3));
  console.log(topKFrequent([5,5,5,5], 0));
}

runTests();
