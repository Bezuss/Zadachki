function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let fresh = 0;
  let queue = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh++;
      if (grid[r][c] === 2) queue.push([r, c]);
    }
  }

  let minutes = 0;
  while (queue.length && fresh > 0) {
    const next = [];
    for (const [r, c] of queue) {
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;
        if (grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          fresh--;
          next.push([nr, nc]);
        }
      }
    }
    queue = next;
    minutes++;
  }

  return fresh === 0 ? minutes : -1;
}

const tests = [
  [[2, 1, 1], [1, 1, 0], [0, 1, 1]],
  [[2, 1, 1], [0, 1, 1], [1, 0, 1]],
  [[0, 2]],
  [[1]],
  [[0]],
];

for (const grid of tests) {
  console.log(orangesRotting(grid.map((row) => [...row])));
}
