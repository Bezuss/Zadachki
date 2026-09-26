function trap(height) {
  let total = 0
  for (let i = 0; i < height.length; i++) {
    let leftMax = 0
    let rightMax = 0
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, height[j])
    }
    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j])
    }
    total += Math.min(leftMax, rightMax) - height[i]
  }
  return total
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
