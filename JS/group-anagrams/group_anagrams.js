function keyFor(word) {
  const counts = new Array(26).fill(0);
  for (const ch of word) {
    counts[ch.charCodeAt(0) - 97]++;
  }
  return counts.join(',');
}

function groupAnagrams(words) {
  const map = new Map();
  for (const word of words) {
    const key = keyFor(word);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }
  return [...map.values()];
}

const tests = [
  ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
  [''],
  [],
  ['a', 'a', 'b'],
  ['abc', 'cab', 'bca', 'abcd']
];

for (const t of tests) {
  console.log(JSON.stringify(t), '->', JSON.stringify(groupAnagrams(t)));
}
