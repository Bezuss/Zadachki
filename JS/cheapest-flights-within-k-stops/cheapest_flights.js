function findCheapestPrice(n, flights, src, dst, k) {
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i <= k; i++) {
    const next = dist.slice();
    for (const [from, to, price] of flights) {
      if (dist[from] === Infinity) continue;
      next[to] = Math.min(next[to], dist[from] + price);
    }
    dist = next;
  }

  return dist[dst] === Infinity ? -1 : dist[dst];
}

const tests = [
  [3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1],
  [3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0],
  [4, [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 10]], 0, 3, 1],
  [4, [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 10]], 0, 3, 2],
  [2, [], 0, 1, 3],
  [3, [[0, 1, 5]], 0, 0, 0],
];

for (const [n, flights, src, dst, k] of tests) {
  console.log(findCheapestPrice(n, flights, src, dst, k));
}
