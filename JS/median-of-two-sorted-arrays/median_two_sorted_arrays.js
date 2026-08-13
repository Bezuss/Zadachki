function findMedianSortedArrays(a, b) {
  const merged = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) merged.push(a[i++]);
    else merged.push(b[j++]);
  }
  while (i < a.length) merged.push(a[i++]);
  while (j < b.length) merged.push(b[j++]);

  const n = merged.length;
  const mid = Math.floor(n / 2);
  if (n % 2 === 0) return (merged[mid - 1] + merged[mid]) / 2;
  return merged[mid];
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
