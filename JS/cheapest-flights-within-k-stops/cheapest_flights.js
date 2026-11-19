function findCheapestPrice(n, flights, src, dst, k) {
  const graph = Array.from({ length: n }, () => []);
  for (const [from, to, price] of flights) {
    graph[from].push([to, price]);
  }

  let best = Infinity;
  const dfs = (node, stops, cost) => {
    if (cost >= best) return;
    if (node === dst) {
      best = cost;
      return;
    }
    if (stops > k) return;
    for (const [next, price] of graph[node]) {
      dfs(next, stops + 1, cost + price);
    }
  };
  dfs(src, 0, 0);
  return best === Infinity ? -1 : best;
}

const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
console.log(findCheapestPrice(3, flights, 0, 2, 1));
console.log(findCheapestPrice(3, flights, 0, 2, 0));
