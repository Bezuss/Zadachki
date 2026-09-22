function canFinish(numCourses, prerequisites) {
  const graph = new Map();
  for (let i = 0; i < numCourses; i++) graph.set(i, []);

  for (const [a, b] of prerequisites) {
    graph.get(a).push(b);
  }

  const state = new Array(numCourses).fill(0);

  function dfs(node) {
    if (state[node] === 1) return false;
    if (state[node] === 2) return true;

    state[node] = 1;
    for (const next of graph.get(node)) {
      if (!dfs(next)) return false;
    }
    state[node] = 2;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
}

function findOrder(numCourses, prerequisites) {
  const graph = new Map();
  const indegree = new Array(numCourses).fill(0);
  for (let i = 0; i < numCourses; i++) graph.set(i, []);

  for (const [a, b] of prerequisites) {
    graph.get(b).push(a);
    indegree[a]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const next of graph.get(node)) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return order.length === numCourses ? order : [];
}

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
console.log(findOrder(2, [[1, 0], [0, 1]]));
