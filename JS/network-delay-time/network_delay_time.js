class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(item) {
    const items = this.items;
    items.push(item);
    let i = items.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (items[parent][0] <= items[i][0]) break;
      [items[parent], items[i]] = [items[i], items[parent]];
      i = parent;
    }
  }

  pop() {
    const items = this.items;
    const top = items[0];
    const last = items.pop();
    if (items.length) {
      items[0] = last;
      let i = 0;
      while (true) {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < items.length && items[left][0] < items[smallest][0]) smallest = left;
        if (right < items.length && items[right][0] < items[smallest][0]) smallest = right;
        if (smallest === i) break;
        [items[smallest], items[i]] = [items[i], items[smallest]];
        i = smallest;
      }
    }
    return top;
  }
}

function networkDelayTime(times, n, k) {
  const graph = new Map();
  for (const [u, v, w] of times) {
    if (!graph.has(u)) graph.set(u, []);
    graph.get(u).push([v, w]);
  }

  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  const heap = new MinHeap();
  heap.push([0, k]);

  while (heap.size()) {
    const [d, u] = heap.pop();
    if (d > dist[u]) continue;
    for (const [v, w] of graph.get(u) || []) {
      if (d + w < dist[v]) {
        dist[v] = d + w;
        heap.push([dist[v], v]);
      }
    }
  }

  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = Math.max(ans, dist[i]);
  }
  return ans === Infinity ? -1 : ans;
}

const tests = [
  [[[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2],
  [[[1, 2, 1]], 2, 1],
  [[[1, 2, 1]], 2, 2],
  [[[1, 2, 1], [2, 3, 2], [1, 3, 5]], 3, 1],
];

for (const [times, n, k] of tests) {
  console.log(networkDelayTime(times, n, k));
}
