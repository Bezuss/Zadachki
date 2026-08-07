function wordBreak(s, wordDict) {
  const words = new Set(wordDict);

  function helper(str) {
    if (str.length === 0) return true;
    for (let i = 1; i <= str.length; i++) {
      const prefix = str.slice(0, i);
      if (words.has(prefix)) {
        if (helper(str.slice(i))) return true;
      }
    }
    return false;
  }

  return helper(s);
}

console.log(wordBreak("leetcode", ["leet", "code"]));
