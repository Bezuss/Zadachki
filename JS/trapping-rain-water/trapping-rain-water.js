function trap(height) {
  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let total = 0

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left])
      total += leftMax - height[left]
      left++
    } else {
      rightMax = Math.max(rightMax, height[right])
      total += rightMax - height[right]
      right--
    }
  }

  return total
}

const tests = [
  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
  [4, 2, 0, 3, 2, 5],
  [3],
  [1, 2, 3, 4],
  []
]

for (const heights of tests) {
  console.log(JSON.stringify(heights), '->', trap(heights))
}
