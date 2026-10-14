function buildGraph(words) {
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
    if (a.length > b.length && a.startsWith(b)) return null;

    const len = Math.min(a.length, b.length);
    for (let j = 0; j < len; j++) {
      if (a[j] === b[j]) continue;
      if (!graph.get(a[j]).has(b[j])) {
        graph.get(a[j]).add(b[j]);
        indegree.set(b[j], indegree.get(b[j]) + 1);
      }
      break;
    }
  }

  return { graph, indegree };
}

function alienOrder(words) {
  const built = buildGraph(words);
  if (!built) return '';

  const { graph, indegree } = built;
  const queue = [];
  for (const [ch, d] of indegree) {
    if (d === 0) queue.push(ch);
  }

  let result = '';
  for (let i = 0; i < queue.length; i++) {
    const ch = queue[i];
    result += ch;
    for (const next of graph.get(ch)) {
      const left = indegree.get(next) - 1;
      indegree.set(next, left);
      if (left === 0) queue.push(next);
    }
  }

  return result.length === graph.size ? result : '';
}

const cases = [
  ['wrt', 'wrf', 'er', 'ett', 'rftt'],
  ['z', 'x'],
  ['z', 'x', 'z'],
  ['abc', 'ab'],
  ['a', 'a'],
  [],
];

for (const words of cases) {
  console.log(JSON.stringify(words), '->', JSON.stringify(alienOrder(words)));
}
