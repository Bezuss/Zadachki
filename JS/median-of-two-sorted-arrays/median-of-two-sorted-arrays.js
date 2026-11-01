function findMedianSortedArrays(a, b) {
  const merged = [...a, ...b].sort((x, y) => x - y)
  const n = merged.length
  if (n === 0) return null
  if (n % 2 === 1) return merged[(n - 1) / 2]
  return (merged[n / 2 - 1] + merged[n / 2]) / 2
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
