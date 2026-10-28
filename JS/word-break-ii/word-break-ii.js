function wordBreak(s, wordDict) {
  const words = new Set(wordDict);
  const memo = new Map();

  function go(start) {
    if (memo.has(start)) return memo.get(start);
    const res = [];
    for (let end = start + 1; end <= s.length; end++) {
      const piece = s.slice(start, end);
      if (!words.has(piece)) continue;
      if (end === s.length) {
        res.push(piece);
      } else {
        for (const rest of go(end)) {
          res.push(piece + ' ' + rest);
        }
      }
    }
    memo.set(start, res);
    return res;
  }

  return go(0);
}

console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));
console.log(wordBreak('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']));
