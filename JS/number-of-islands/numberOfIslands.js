function numIslands(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;
    if (visited[r][c] || grid[r][c] !== '1') return;

    visited[r][c] = true;

    for (const [dr, dc] of dirs) {
      dfs(r + dr, c + dc);
    }
  }

  let count = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1' && !visited[r][c]) {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}

function numIslandsBFS(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let count = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1' && !visited[r][c]) {
        count++;
        const queue = [[r, c]];
        visited[r][c] = true;

        while (queue.length) {
          const [cr, cc] = queue.shift();

          for (const [dr, dc] of dirs) {
            const nr = cr + dr;
            const nc = cc + dc;
            if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && !visited[nr][nc] && grid[nr][nc] === '1') {
              visited[nr][nc] = true;
              queue.push([nr, nc]);
            }
          }
        }
      }
    }
  }

  return count;
}

function runTests() {
  const cases = [
    {
      grid: [
        ['1', '1', '0'],
        ['0', '1', '0'],
        ['0', '0', '1'],
      ],
      expected: 2,
    },
    {
      grid: [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ],
      expected: 1,
    },
    { grid: [], expected: 0 },
    {
      grid: [
        ['0', '0'],
        ['0', '0'],
      ],
      expected: 0,
    },
    {
      grid: [
        ['1', '0', '1', '0', '1'],
      ],
      expected: 3,
    },
  ];

  for (const { grid, expected } of cases) {
    const dfsResult = numIslands(grid);
    const bfsResult = numIslandsBFS(grid);
    const ok = dfsResult === expected && bfsResult === expected;
    console.log(`dfs=${dfsResult} bfs=${bfsResult} expected=${expected} ${ok ? 'OK' : 'FAIL'}`);
  }
}

runTests();
