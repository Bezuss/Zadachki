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

function runTests() {
  const cases = [
    { input: [100, 4, 200, 1, 3, 2], expected: 4 },
    { input: [], expected: 0 },
    { input: [1, 2, 0, 1], expected: 3 },
    { input: [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6], expected: 7 },
    { input: [5], expected: 1 },
  ];

  for (const { input, expected } of cases) {
    const result = longestConsecutive(input);
    console.log(JSON.stringify(input), '->', result, result === expected ? 'ok' : `FAIL expected ${expected}`);
  }
}

runTests();
