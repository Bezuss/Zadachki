function canFinish(numCourses, prerequisites) {
  const adj = new Map();
  for (let i = 0; i < numCourses; i++) adj.set(i, []);

  for (const [a, b] of prerequisites) {
    adj.get(a).push(b);
  }

  console.log(adj);

  return true;
}

console.log(canFinish(2, [[1, 0]]));
