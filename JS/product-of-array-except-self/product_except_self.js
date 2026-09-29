function productExceptSelf(nums) {
  const n = nums.length
  const left = new Array(n).fill(1)
  const right = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1]
  }

  return nums.map((_, i) => left[i] * right[i])
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([0, 1, 2]))
