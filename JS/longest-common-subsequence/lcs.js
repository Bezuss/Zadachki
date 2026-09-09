function lcsLength(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp.push(new Array(n + 1).fill(0));
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp;
}

function lcs(a, b) {
  const dp = lcsLength(a, b);
  return dp[a.length][b.length];
}

function lcsString(a, b) {
  const dp = lcsLength(a, b);
  let i = a.length, j = b.length;
  let result = '';
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      result = a[i - 1] + result;
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return result;
}

function runTests() {
  const cases = [
    ['abcde', 'ace', 3],
    ['abc', 'abc', 3],
    ['abc', 'def', 0],
    ['', 'abc', 0],
    ['bl', 'yby', 1],
  ];

  for (const [a, b, expected] of cases) {
    const got = lcs(a, b);
    const status = got === expected ? 'ok' : 'FAIL';
    console.log(`${status} lcs(${JSON.stringify(a)}, ${JSON.stringify(b)}) = ${got}, expected ${expected}`);
  }

  console.log('lcsString abcde/ace ->', lcsString('abcde', 'ace'));
  console.log('lcsString abc/abc ->', lcsString('abc', 'abc'));
}

runTests();
