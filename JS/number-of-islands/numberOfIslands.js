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

const test1 = [
  ['1', '1', '0'],
  ['0', '1', '0'],
  ['0', '0', '1'],
];

console.log(numIslands(test1));
