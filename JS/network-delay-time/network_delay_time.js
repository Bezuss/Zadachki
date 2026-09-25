function networkDelayTime(times, n, k) {
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  for (let i = 0; i < n; i++) {
    for (const [u, v, w] of times) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
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
