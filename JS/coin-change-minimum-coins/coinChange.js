function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (c <= i && dp[i - c] + 1 < dp[i]) {
        dp[i] = dp[i - c] + 1;
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

function coinChangeWithCoins(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  const chosen = new Array(amount + 1).fill(-1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (c <= i && dp[i - c] + 1 < dp[i]) {
        dp[i] = dp[i - c] + 1;
        chosen[i] = c;
      }
    }
  }

  if (dp[amount] === Infinity) return { count: -1, coins: [] };

  const result = [];
  let cur = amount;
  while (cur > 0) {
    result.push(chosen[cur]);
    cur -= chosen[cur];
  }

  return { count: dp[amount], coins: result };
}

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
console.log(coinChange([186, 419, 83, 408], 6249));
console.log(coinChangeWithCoins([1, 2, 5], 11));
