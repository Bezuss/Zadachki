function wordBreak(s, wordDict) {
  const words = new Set(wordDict);
  const maxLen = Math.max(0, ...wordDict.map(w => w.length));
  const memo = new Map();

  const go = (start) => {
    if (memo.has(start)) return memo.get(start);
    const res = [];
    const limit = Math.min(s.length, start + maxLen);
    for (let end = start + 1; end <= limit; end++) {
      const piece = s.slice(start, end);
      if (!words.has(piece)) continue;
      if (end === s.length) {
        res.push(piece);
      } else {
        for (const rest of go(end)) {
          res.push(`${piece} ${rest}`);
        }
      }
    }
    memo.set(start, res);
    return res;
  };

  return go(0);
}

const tests = [
  ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']],
  ['pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']],
  ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
  ['aaaa', ['a', 'aa']],
];

for (const [s, dict] of tests) {
  console.log(s, wordBreak(s, dict));
}
