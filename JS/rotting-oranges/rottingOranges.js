function orangesRotting(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  let queue = [];
  let fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }

  if (fresh === 0) return 0;

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let minutes = 0;

  while (queue.length > 0 && fresh > 0) {
    const next = [];

    for (const [r, c] of queue) {
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
        if (grid[nr][nc] !== 1) continue;

        grid[nr][nc] = 2;
        fresh--;
        next.push([nr, nc]);
      }
    }

    queue = next;
    minutes++;
  }

  return fresh > 0 ? -1 : minutes;
}

function runTests() {
  const cases = [
    { grid: [[2, 1, 1], [1, 1, 0], [0, 1, 1]], expected: 4 },
    { grid: [[2, 1, 1], [0, 1, 1], [1, 0, 1]], expected: -1 },
    { grid: [[0, 2]], expected: 0 },
    { grid: [[0, 0, 0]], expected: 0 },
    { grid: [[2]], expected: 0 },
    { grid: [[1]], expected: -1 },
  ];

  for (const { grid, expected } of cases) {
    const result = orangesRotting(grid.map(row => row.slice()));
    console.log(JSON.stringify(grid), '->', result, result === expected ? 'ok' : 'FAIL expected ' + expected);
  }
}

runTests();
