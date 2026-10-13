function alienOrder(words) {
  const graph = new Map();
  const indegree = new Map();

  for (const word of words) {
    for (const ch of word) {
      if (!graph.has(ch)) {
        graph.set(ch, new Set());
        indegree.set(ch, 0);
      }
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i];
    const b = words[i + 1];
    const len = Math.min(a.length, b.length);
    for (let j = 0; j < len; j++) {
      if (a[j] !== b[j]) {
        graph.get(a[j]).add(b[j]);
        break;
      }
    }
  }

  return Array.from(graph.keys()).join('');
}

console.log(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']));
