function wordBreak(s, wordDict) {
  const words = new Set(wordDict);
  const memo = new Map();

  function helper(str) {
    if (str.length === 0) return true;
    if (memo.has(str)) return memo.get(str);

    let result = false;
    for (let i = 1; i <= str.length; i++) {
      const prefix = str.slice(0, i);
      if (words.has(prefix) && helper(str.slice(i))) {
        result = true;
        break;
      }
    }

    memo.set(str, result);
    return result;
  }

  return helper(s);
}

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
