function longestConsecutive(nums) {
  if (!nums || nums.length === 0) return 0;

  let best = 1;
  const sorted = [...nums].sort((a, b) => a - b);

  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) continue;
    if (sorted[i] === sorted[i - 1] + 1) {
      run++;
    } else {
      run = 1;
    }
    best = Math.max(best, run);
  }

  return best;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
