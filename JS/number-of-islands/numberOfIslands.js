function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  let count = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
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
