function groupAnagrams(strs) {
  const result = [];
  const used = new Array(strs.length).fill(false);

  for (let i = 0; i < strs.length; i++) {
    if (used[i]) continue;
    const group = [strs[i]];
    used[i] = true;
    for (let j = i + 1; j < strs.length; j++) {
      if (used[j]) continue;
      if (isAnagram(strs[i], strs[j])) {
        group.push(strs[j]);
        used[j] = true;
      }
    }
    result.push(group);
  }
  return result;
}

function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  return a.split('').sort().join('') === b.split('').sort().join('');
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
