function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let fresh = 0;
  const queue = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh++;
      if (grid[r][c] === 2) queue.push([r, c]);
    }
  }

  return -1;
}

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]));
