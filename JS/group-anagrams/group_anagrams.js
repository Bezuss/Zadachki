function groupAnagrams(strs) {
  const map = new Map();

  for (const s of strs) {
    const key = getKey(s);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(s);
  }

  return Array.from(map.values());
}

function getKey(s) {
  const counts = new Array(26).fill(0);
  for (const ch of s) {
    counts[ch.charCodeAt(0) - 97]++;
  }
  return counts.join(',');
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
