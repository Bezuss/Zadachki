function groupAnagrams(words) {
  const groups = [];
  const used = new Array(words.length).fill(false);
  for (let i = 0; i < words.length; i++) {
    if (used[i]) continue;
    const group = [words[i]];
    used[i] = true;
    for (let j = i + 1; j < words.length; j++) {
      if (!used[j] && isAnagram(words[i], words[j])) {
        group.push(words[j]);
        used[j] = true;
      }
    }
    groups.push(group);
  }
  return groups;
}

function isAnagram(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
