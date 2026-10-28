function wordBreak(s, wordDict) {
  const words = new Set(wordDict);
  const result = [];

  function go(start, parts) {
    if (start === s.length) {
      result.push(parts.join(' '));
      return;
    }
    for (let end = start + 1; end <= s.length; end++) {
      const piece = s.slice(start, end);
      if (words.has(piece)) {
        parts.push(piece);
        go(end, parts);
        parts.pop();
      }
    }
  }

  go(0, []);
  return result;
}

console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));
