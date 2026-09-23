function canFinish(numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites, false);
  const state = new Array(numCourses).fill(0);

  function dfs(node) {
    if (state[node] === 1) return false;
    if (state[node] === 2) return true;

    state[node] = 1;
    for (const next of graph[node]) {
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
  const graph = buildGraph(numCourses, prerequisites, true);
  const indegree = new Array(numCourses).fill(0);

  for (const [a] of prerequisites) {
    indegree[a]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const order = [];
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    order.push(node);
    for (const next of graph[node]) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return order.length === numCourses ? order : [];
}

function buildGraph(numCourses, prerequisites, reversed) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) {
    if (reversed) graph[b].push(a);
    else graph[a].push(b);
  }
  return graph;
}

module.exports = { canFinish, findOrder };

if (require.main === module) {
  console.log(canFinish(2, [[1, 0]]));
  console.log(canFinish(2, [[1, 0], [0, 1]]));
  console.log(canFinish(5, []));
  console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
  console.log(findOrder(2, [[1, 0], [0, 1]]));
  console.log(findOrder(1, []));
}
