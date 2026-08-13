function findMedianSortedArrays(a, b) {
  if (a.length > b.length) return findMedianSortedArrays(b, a);

  const m = a.length, n = b.length;
  const half = Math.floor((m + n + 1) / 2);

  let lo = 0, hi = m;
  while (lo <= hi) {
    const i = Math.floor((lo + hi) / 2);
    const j = half - i;

    const aLeft = i === 0 ? -Infinity : a[i - 1];
    const aRight = i === m ? Infinity : a[i];
    const bLeft = j === 0 ? -Infinity : b[j - 1];
    const bRight = j === n ? Infinity : b[j];

    if (aLeft <= bRight && bLeft <= aRight) {
      if ((m + n) % 2 === 1) return Math.max(aLeft, bLeft);
      return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
    } else if (aLeft > bRight) {
      hi = i - 1;
    } else {
      lo = i + 1;
    }
  }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
