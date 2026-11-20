function findCheapestPrice(n, flights, src, dst, k) {
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i <= k; i++) {
    const next = dist.slice();
    for (const [from, to, price] of flights) {
      if (dist[from] === Infinity) continue;
      if (dist[from] + price < next[to]) {
        next[to] = dist[from] + price;
      }
    }
    dist = next;
  }

  return dist[dst] === Infinity ? -1 : dist[dst];
}

const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
console.log(findCheapestPrice(3, flights, 0, 2, 1));
console.log(findCheapestPrice(3, flights, 0, 2, 0));
