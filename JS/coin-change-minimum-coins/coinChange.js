function coinChange(coins, amount) {
  if (amount === 0) return 0;

  const memo = new Map();

  function helper(remaining) {
    if (remaining === 0) return 0;
    if (remaining < 0) return -1;
    if (memo.has(remaining)) return memo.get(remaining);

    let best = -1;
    for (const c of coins) {
      const res = helper(remaining - c);
      if (res >= 0) {
        if (best === -1 || res + 1 < best) best = res + 1;
      }
    }
    memo.set(remaining, best);
    return best;
  }

  return helper(amount);
}

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
