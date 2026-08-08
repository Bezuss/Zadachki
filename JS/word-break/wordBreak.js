function wordBreak(s, wordDict) {
  const words = new Set(wordDict);
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && words.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}

function runTests() {
  const cases = [
    ["leetcode", ["leet", "code"], true],
    ["applepenapple", ["apple", "pen"], true],
    ["catsandog", ["cats", "dog", "sand", "and", "cat"], false],
    ["", ["a"], true],
    ["a", ["b"], false],
    ["cars", ["car", "ca", "rs"], true],
  ];

  for (const [s, dict, expected] of cases) {
    const got = wordBreak(s, dict);
    console.log(`wordBreak(${JSON.stringify(s)}, ${JSON.stringify(dict)}) = ${got}, expected ${expected}`);
  }
}

runTests();
