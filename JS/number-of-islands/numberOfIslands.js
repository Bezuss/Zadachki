function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;
    if (visited[r][c] || grid[r][c] === '0') return;

    visited[r][c] = true;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
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
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  let count = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1' && !visited[r][c]) {
        count++;
        const queue = [[r, c]];
        visited[r][c] = true;

        while (queue.length) {
          const [cr, cc] = queue.shift();
          const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

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

const test1 = [
  ['1', '1', '0'],
  ['0', '1', '0'],
  ['0', '0', '1'],
];

const test2 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

console.log(numIslands(test1));
console.log(numIslandsBFS(test1));
console.log(numIslands(test2));
console.log(numIslandsBFS(test2));
