function topKFrequent(nums, k) {
  if (!Array.isArray(nums) || nums.length === 0 || k <= 0) return [];

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
  const cases = [
    [[1,1,1,2,2,3], 2, [1,2]],
    [[1], 1, [1]],
    [[4,1,-1,2,-1,2,3], 2, [-1,2]],
    [[], 3, []],
    [[5,5,5,5], 0, []],
  ];

  for (const [nums, k, expected] of cases) {
    const got = topKFrequent(nums, k);
    const sortedGot = [...got].sort();
    const sortedExp = [...expected].sort();
    const pass = JSON.stringify(sortedGot) === JSON.stringify(sortedExp);
    console.log(`topKFrequent(${JSON.stringify(nums)}, ${k}) = ${JSON.stringify(got)} ${pass ? 'ok' : 'FAIL expected ' + JSON.stringify(expected)}`);
  }
}

runTests();

module.exports = topKFrequent;
