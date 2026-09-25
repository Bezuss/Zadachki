function networkDelayTime(times, n, k) {
  const graph = new Map();
  for (const [u, v, w] of times) {
    if (!graph.has(u)) graph.set(u, []);
    graph.get(u).push([v, w]);
  }

  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  const queue = [[0, k]];

  while (queue.length) {
    queue.sort((a, b) => a[0] - b[0]);
    const [d, u] = queue.shift();
    if (d > dist[u]) continue;
    for (const [v, w] of graph.get(u) || []) {
      if (d + w < dist[v]) {
        dist[v] = d + w;
        queue.push([dist[v], v]);
      }
    }
  }

  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = Math.max(ans, dist[i]);
  }
  return ans;
}

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));
console.log(networkDelayTime([[1, 2, 1]], 2, 1));
