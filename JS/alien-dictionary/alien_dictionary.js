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
    if (a.length > b.length && a.startsWith(b)) return '';
    const len = Math.min(a.length, b.length);
    for (let j = 0; j < len; j++) {
      if (a[j] !== b[j]) {
        if (!graph.get(a[j]).has(b[j])) {
          graph.get(a[j]).add(b[j]);
          indegree.set(b[j], indegree.get(b[j]) + 1);
        }
        break;
      }
    }
  }

  const queue = [];
  for (const [ch, d] of indegree) {
    if (d === 0) queue.push(ch);
  }

  let result = '';
  while (queue.length) {
    const ch = queue.shift();
    result += ch;
    for (const next of graph.get(ch)) {
      indegree.set(next, indegree.get(next) - 1);
      if (indegree.get(next) === 0) queue.push(next);
    }
  }

  return result.length === graph.size ? result : '';
}

console.log(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']));
console.log(alienOrder(['z', 'x']));
console.log(alienOrder(['z', 'x', 'z']));
console.log(alienOrder(['abc', 'ab']));
