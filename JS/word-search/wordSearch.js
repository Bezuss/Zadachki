function exist(board, word) {
  if (!board.length || !board[0].length || !word.length) return false;

  const rows = board.length;
  const cols = board[0].length;

  const charCount = {};
  for (const row of board) {
    for (const ch of row) {
      charCount[ch] = (charCount[ch] || 0) + 1;
    }
  }
  const wordCount = {};
  for (const ch of word) {
    wordCount[ch] = (wordCount[ch] || 0) + 1;
    if (!charCount[ch] || wordCount[ch] > charCount[ch]) return false;
  }

  function dfs(r, c, i) {
    if (i === word.length) return true;
    if (r < 0 || c < 0 || r >= rows || c >= cols) return false;
    if (board[r][c] !== word[i]) return false;

    const temp = board[r][c];
    board[r][c] = '#';

    const found =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    board[r][c] = temp;
    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
}

function runTests() {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];

  console.log(exist(board, 'ABCCED'));
  console.log(exist(board, 'SEE'));
  console.log(exist(board, 'ABCB'));
  console.log(exist([['A']], 'A'));
  console.log(exist([['A']], 'AB'));
  console.log(exist([['A', 'A']], 'AAA'));
}

runTests();
