function canFinish(numCourses, prerequisites) {
  const graph = new Map();
  for (let i = 0; i < numCourses; i++) graph.set(i, []);

  for (const [a, b] of prerequisites) {
    graph.get(a).push(b);
  }

  console.log(graph);
}

canFinish(2, [[1, 0]]);
