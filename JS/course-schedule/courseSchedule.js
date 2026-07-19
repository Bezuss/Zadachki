function canFinish(numCourses, prerequisites) {
  const adj = new Map();
  for (let i = 0; i < numCourses; i++) adj.set(i, []);
  for (const [a, b] of prerequisites) adj.get(a).push(b);

  const UNVISITED = 0, VISITING = 1, DONE = 2;
  const state = new Array(numCourses).fill(UNVISITED);

  function dfs(node) {
    state[node] = VISITING;
    for (const next of adj.get(node)) {
      if (state[next] === VISITING) return false;
      if (state[next] === UNVISITED && !dfs(next)) return false;
    }
    state[node] = DONE;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (state[i] === UNVISITED && !dfs(i)) return false;
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
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    order.push(node);
    for (const next of adj.get(node)) {
      indeg[next]--;
      if (indeg[next] === 0) queue.push(next);
    }
  }

  return order.length === numCourses ? order : [];
}

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
console.log(canFinish(5, [[1, 0], [2, 1], [3, 2], [4, 3]]));
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
console.log(findOrder(2, [[1, 0], [0, 1]]));
console.log(findOrder(1, []));
