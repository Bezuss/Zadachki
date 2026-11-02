function findMedianSortedArrays(a, b) {
  if (a.length > b.length) return findMedianSortedArrays(b, a)
  const m = a.length
  const n = b.length
  let lo = 0
  let hi = m
  while (lo <= hi) {
    const i = Math.floor((lo + hi) / 2)
    const j = Math.floor((m + n + 1) / 2) - i
    const leftA = a[i - 1]
    const rightA = a[i]
    const leftB = b[j - 1]
    const rightB = b[j]
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
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
