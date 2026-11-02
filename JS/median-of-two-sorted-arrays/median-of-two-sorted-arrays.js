function findMedianSortedArrays(a, b) {
  if (a.length > b.length) return findMedianSortedArrays(b, a)
  const m = a.length
  const n = b.length
  let lo = 0
  let hi = m
  while (lo <= hi) {
    const i = Math.floor((lo + hi) / 2)
    const j = Math.floor((m + n + 1) / 2) - i
    const leftA = i > 0 ? a[i - 1] : -Infinity
    const rightA = i < m ? a[i] : Infinity
    const leftB = j > 0 ? b[j - 1] : -Infinity
    const rightB = j < n ? b[j] : Infinity
    if (leftA > rightB) {
      hi = i - 1
    } else if (leftB > rightA) {
      lo = i + 1
    } else {
      const left = Math.max(leftA, leftB)
      if ((m + n) % 2 === 1) return left
      return (left + Math.min(rightA, rightB)) / 2
    }
  }
  return null
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([], [5]))
