function canFinish(numCourses, prerequisites) {
  const adj = new Map();
  for (let i = 0; i < numCourses; i++) adj.set(i, []);

  for (const [a, b] of prerequisites) {
    adj.get(a).push(b);
  }

  const state = new Array(numCourses).fill(0);

  function dfs(node) {
    state[node] = 1;
    for (const next of adj.get(node)) {
      if (state[next] === 1) return false;
      if (state[next] === 0 && !dfs(next)) return false;
    }
    state[node] = 2;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (state[i] === 0 && !dfs(i)) return false;
  }

  return true;
}

function findOrder(numCourses, prerequisites) {
  const indeg = new Array(numCourses).fill(0);
  const adj = new Map();
  for (let i = 0; i < numCourses; i++) adj.set(i, []);

  for (const [a, b] of prerequisites) {
    adj.get(b).push(a);
    indeg[a]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) queue.push(i);
  }

  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const next of adj.get(node)) {
      indeg[next]--;
      if (indeg[next] === 0) queue.push(next);
    }
  }

  return order;
}

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
