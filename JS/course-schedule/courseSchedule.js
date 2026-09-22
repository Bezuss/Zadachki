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

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
