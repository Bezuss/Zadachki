function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) return [];

  const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);

  const result = [sorted[0].slice()];

  for (let i = 1; i < sorted.length; i++) {
    const curr = sorted[i];
    const last = result[result.length - 1];

    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      result.push(curr.slice());
    }
  }

  return result;
}

function runTests() {
  const cases = [
    { input: [[1,3],[2,6],[8,10],[15,18]], expected: [[1,6],[8,10],[15,18]] },
    { input: [[1,4],[4,5]], expected: [[1,5]] },
    { input: [], expected: [] },
    { input: [[1,4]], expected: [[1,4]] },
    { input: [[5,10],[1,3]], expected: [[1,3],[5,10]] },
    { input: [[1,10],[2,3],[4,5]], expected: [[1,10]] },
  ];

  for (const { input, expected } of cases) {
    const actual = mergeIntervals(input);
    const pass = JSON.stringify(actual) === JSON.stringify(expected);
    console.log(pass ? 'PASS' : 'FAIL', JSON.stringify(input), '->', JSON.stringify(actual));
  }
}

runTests();
