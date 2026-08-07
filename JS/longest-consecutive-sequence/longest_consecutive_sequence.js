function longestConsecutive(nums) {
  if (!nums || nums.length === 0) return 0;

  const set = new Set(nums);
  let best = 0;

  for (const n of set) {
    if (set.has(n - 1)) continue;

    let length = 1;
    let current = n;
    while (set.has(current + 1)) {
      current++;
      length++;
    }

    best = Math.max(best, length);
  }

  return best;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
