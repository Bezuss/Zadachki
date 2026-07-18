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
      if (state[next] === 0) {
        dfs(next);
      }
    }
    state[node] = 2;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (state[i] === 0) {
      dfs(i);
    }
  }

  return true;
}

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
