function coinChange(coins, amount) {
  if (amount === 0) return 0;

  function helper(remaining) {
    if (remaining === 0) return 0;
    if (remaining < 0) return -1;
    let best = -1;
    for (const c of coins) {
      const res = helper(remaining - c);
      if (res >= 0) {
        if (best === -1 || res + 1 < best) best = res + 1;
      }
    }
    return best;
  }

  return helper(amount);
}

console.log(coinChange([1, 2, 5], 11));
